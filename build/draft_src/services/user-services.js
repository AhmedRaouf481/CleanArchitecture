"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserServices {
    constructor() {
        this.createToken = (payload) => {
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET);
            return token;
        };
        this.handleError = (error, problem = "") => {
            let code;
            let msg;
            if ((error === null || error === void 0 ? void 0 : error.code) == "P2025") {
                code = 404;
                msg = `Not Found!`;
                return [code, msg];
            }
            if ((error === null || error === void 0 ? void 0 : error.code) == "P2014") {
                code = 400;
                msg = `You already have a ${problem}`;
                return [code, msg];
            }
            if ((error === null || error === void 0 ? void 0 : error.code) == "P2002") {
                code = 400;
                msg = `There is user with this ${problem}`;
                return [code, msg];
            }
            code = 500;
            msg = error;
            return [code, msg];
        };
    }
}
//# sourceMappingURL=user-services.js.map