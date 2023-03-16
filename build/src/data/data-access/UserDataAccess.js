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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataAccess = void 0;
const client_1 = require("@prisma/client");
class UserDataAccess {
    constructor() {
        this.db = new client_1.PrismaClient();
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.db.user.create({
                    data: user
                });
                return newUser;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.db.user.findMany();
                return users;
            }
            catch (err) {
                throw err;
            }
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.db.user.findUniqueOrThrow({
                    where: {
                        id
                    }
                });
                return user;
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.db.user.update({
                    where: {
                        id
                    },
                    data
                });
                return user;
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.db.user.delete({
                    where: {
                        id
                    }
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.UserDataAccess = UserDataAccess;
//# sourceMappingURL=UserDataAccess.js.map