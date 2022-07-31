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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardById = void 0;
const dashboard_store_1 = require("../store/dashboard.store");
const getDashboardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dashboardId } = req.params;
    const dashboard = yield dashboard_store_1.getDashboard(dashboardId);
    if (dashboard) {
        return res.status(200).json(dashboard);
    }
    return res.status(400).json({ message: "We couldn't find the dashboard" });
});
exports.getDashboardById = getDashboardById;
//# sourceMappingURL=dashboard.controller.js.map