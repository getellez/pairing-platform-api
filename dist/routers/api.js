"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApiEndpoints = void 0;
const dashboard_router_1 = __importDefault(require("./dashboard.router"));
const user_router_1 = __importDefault(require("./user.router"));
const loadApiEndpoints = (app) => {
    app.use("/api/v1/dashboards", dashboard_router_1.default);
    app.use("/api/v1/auth", user_router_1.default);
};
exports.loadApiEndpoints = loadApiEndpoints;
//# sourceMappingURL=api.js.map