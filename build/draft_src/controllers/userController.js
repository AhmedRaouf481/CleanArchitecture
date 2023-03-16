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
exports.postUser = void 0;
const token_handler_1 = require("../services/token_handler");
const user_use_cases_1 = require("../use-cases/user_use_cases");
const postUser = (httpRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = httpRequest.body;
        let user = yield (0, user_use_cases_1.addUser)(userInfo);
        const token = (0, token_handler_1.createToken)(user.id);
        return {
            status: 201,
            body: Object.assign(Object.assign({}, user), { token })
        };
    }
    catch (error) {
        console.log(error);
        return {
            status: 400,
            error
        };
    }
});
exports.postUser = postUser;
//# sourceMappingURL=userController.js.map