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
exports.UserController = void 0;
const user_use_cases_1 = require("../../domain/use-cases/user-use-cases/user-use-cases");
class UserController {
    constructor(db) {
        this.post_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.user_use_cases.createUser(req.body);
                return res.status(201).json(user);
            }
            catch (err) {
                console.log(err);
                return res.status((err === null || err === void 0 ? void 0 : err.statusCode) ? err.statusCode : 500).json(err);
            }
        });
        this.get_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield this.user_use_cases.getOneUser(id);
                return res.status(200).json(user);
            }
            catch (err) {
                console.log(err);
                return res.status((err === null || err === void 0 ? void 0 : err.statusCode) ? err.statusCode : 500).json(err);
            }
        });
        this.get_all_users = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.user_use_cases.getAllUsers();
                return res.status(200).json(user);
            }
            catch (err) {
                console.log(err);
                return res.status((err === null || err === void 0 ? void 0 : err.statusCode) ? err.statusCode : 500).json(err);
            }
        });
        this.put_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield this.user_use_cases.updateOneUser(id, req.body);
                return res.status(200).json(user);
            }
            catch (err) {
                console.log(err);
                return res.status((err === null || err === void 0 ? void 0 : err.statusCode) ? err.statusCode : 500).json(err);
            }
        });
        this.delete_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.user_use_cases.deleteOneUser(id);
                return res.status(200).json({ msg: "Deleted successfuly" });
            }
            catch (err) {
                console.log(err);
                return res.status((err === null || err === void 0 ? void 0 : err.statusCode) ? err.statusCode : 500).json(err);
            }
        });
        this.user_use_cases = new user_use_cases_1.UserUseCases(db);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map