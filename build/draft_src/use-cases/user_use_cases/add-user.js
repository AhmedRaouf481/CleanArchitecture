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
const user_1 = __importDefault(require("../../domain/user"));
const makeAddUser = (userDB) => {
    const addUser = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, user_1.default)(userInfo);
        const exist = yield userDB.findUser(user.getEmail());
        if (exist)
            throw new Error("There is user with this email");
        return userDB.create({
            name: user.getName,
            email: user.getEmail,
            password: user.getPassword,
            phone: user.getPhone
        });
    });
    return addUser;
};
exports.default = makeAddUser;
//# sourceMappingURL=add-user.js.map