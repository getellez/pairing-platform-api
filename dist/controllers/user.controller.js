"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../config/index");
const user_model_1 = __importDefault(require("../models/user.model"));
const user_services_1 = require("../services/user.services");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    if (!user.email || !user.password || !user.dashboardName) {
        return res.status(400).json({
            message: "Please. Send your email, password and the dashboard name",
        });
    }
    const existingUser = yield user_model_1.default.findOne({
        dashboardName: user.dashboardName,
    });
    if (existingUser) {
        return res
            .status(400)
            .send({ message: "This dashboard name already exists." });
    }
    const newUser = yield user_model_1.default.create(user);
    yield user_services_1.createDashboard(newUser.dashboardName);
    return res.status(201).send(newUser);
});
exports.signup = signup;
const createToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, dashboardName: user.dashboardName }, index_1.config.JWT_SECRET, {
        expiresIn: 86400,
    });
    return token;
};
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    if (!payload.dashboardName || !payload.password) {
        return res
            .status(400)
            .send({ message: "Please. Send your password and the dashboard name" });
    }
    const user = yield user_model_1.default.findOne({
        dashboardName: payload.dashboardName,
    });
    if (!user) {
        return res
            .status(400)
            .send({ message: "This dashboard doesn't exit or is incorrect" });
    }
    const validPassword = yield user.comparePassword(payload.password);
    if (validPassword) {
        const token = createToken(user);
        return res.status(200).json({ token });
    }
    return res.status(400).send({ message: "Dashboard or Password incorrect" });
});
exports.signin = signin;
//# sourceMappingURL=user.controller.js.map