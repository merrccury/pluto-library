"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
exports.UserSchema = new mongoose_1.Schema({
    password: {
        type: 'string',
        required: true
    },
    username: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    userType: {
        type: 'number',
        required: true
    },
    source: {
        type: 'number',
        required: true
    }
});
exports.UserSchema.plugin(mongoose_delete_1.default, {
    deletedAt: true,
    deleted: true,
    deletedBy: true,
    overrideMethods: ['count', 'find', 'findOne', 'findOneAndUpdate', 'update']
});
