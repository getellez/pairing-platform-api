"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DashboardSchema = new mongoose_1.default.Schema({
    title: String,
    members: [
        {
            id: String,
            name: String,
            image: String,
        },
    ],
    tasks: [
        {
            id: String,
            title: String,
            assignedMembers: [
                {
                    id: String,
                    name: String,
                    image: String,
                },
            ],
        },
    ],
});
const DashboardModel = mongoose_1.default.model("dashboards", DashboardSchema);
exports.default = DashboardModel;
//# sourceMappingURL=dashboard.model.js.map