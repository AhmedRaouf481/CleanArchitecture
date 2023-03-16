"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const userDB_1 = __importDefault(require("../../data-access/userDB"));
const add_user_1 = __importDefault(require("./add-user"));
const addUser = (0, add_user_1.default)(userDB_1.default);
exports.addUser = addUser;
//# sourceMappingURL=index.js.map