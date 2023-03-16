"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET);
    return token;
};
exports.createToken = createToken;
//# sourceMappingURL=token_handler.js.map