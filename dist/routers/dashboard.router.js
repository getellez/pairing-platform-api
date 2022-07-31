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
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const dashboard_controller_1 = require("../controllers/dashboard.controller");
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const dashboardRouter = express_1.Router();
dashboardRouter.get("/:dashboardId", passport_1.default.authenticate("jwt", { session: false }), dashboard_controller_1.getDashboardById);
dashboardRouter.post("/:id", passport_1.default.authenticate("jwt", { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const dashboard = yield dashboard_model_1.default.updateOne({ _id: payload._id }, payload);
    res.status(201).send(dashboard);
}));
exports.default = dashboardRouter;
//# sourceMappingURL=dashboard.router.js.map