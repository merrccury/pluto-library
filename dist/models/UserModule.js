"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemas_1 = require("../schemas");
exports.UserModule = mongoose_1.default.model("UserModel", schemas_1.UserSchema);
