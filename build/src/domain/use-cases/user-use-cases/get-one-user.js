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
exports.CreateUserUseCase = void 0;
const User_services_1 = __importDefault(require("../../user_services/User_services"));
class CreateUserUseCase {
    constructor(db) {
        this.db = db;
        this.services = new User_services_1.default();
        this.db = db;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.db.create(user);
            const token = this.services.createToken(newUser.id);
            return Object.assign(Object.assign({}, newUser), { token });
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=get-one-user.js.map