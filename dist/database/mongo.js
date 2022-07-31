"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const connectDb = () => {
    const uri = config_1.config.MONGO_URI;
    mongoose_1.default.connect(uri);
    mongoose_1.default.connection.once("open", () => {
        console.log("[MONGO] Connection stablished");
    });
    mongoose_1.default.connection.on("error", (err) => {
        console.log(err);
        process.exit(1);
    });
};
exports.connectDb = connectDb;
//# sourceMappingURL=mongo.js.map