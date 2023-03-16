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
exports.UserUseCases = void 0;
const UserServices_1 = __importDefault(require("../../user-services/UserServices"));
class UserUseCases {
    constructor(db) {
        this.db = db;
        this.services = new UserServices_1.default();
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user = this.services.validate(user);
                if (user.password !== user.confirm_password) {
                    const err = {
                        statusCode: 400,
                        msg: "Password didn't match"
                    };
                    throw this.services.handleError(err);
                }
                delete user.confirm_password;
                const newUser = yield this.db.create(user);
                const token = this.services.createToken(newUser.id);
                return Object.assign(Object.assign({}, newUser), { token });
            }
            catch (err) {
                const error = this.services.handleError(err);
                throw error;
            }
        });
    }
    getOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.db.getOne(id);
                return user;
            }
            catch (err) {
                const error = this.services.handleError(err);
                throw error;
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.db.getAll();
                return users;
            }
            catch (err) {
                const error = this.services.handleError(err);
                throw error;
            }
        });
    }
    updateOneUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updates = this.services.validate(data, true);
                const user = yield this.db.updateOne(id, updates);
                return user;
            }
            catch (err) {
                const error = this.services.handleError(err);
                throw error;
            }
        });
    }
    deleteOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.db.deleteOne(id);
            }
            catch (err) {
                const error = this.services.handleError(err);
                throw error;
            }
        });
    }
}
exports.UserUseCases = UserUseCases;
//# sourceMappingURL=user-use-cases.js.map