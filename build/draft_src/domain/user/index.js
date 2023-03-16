"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = __importDefault(require("./user-schema"));
const encryptPassword_1 = __importDefault(require("./encryptPassword"));
const user_1 = __importDefault(require("./user"));
const makeUser = (0, user_1.default)(user_schema_1.default, encryptPassword_1.default);
exports.default = makeUser;
//# sourceMappingURL=index.js.map