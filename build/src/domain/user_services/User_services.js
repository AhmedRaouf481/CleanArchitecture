"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
class UserServices {
    constructor() {
        this.createToken = (payload) => {
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET);
            return token;
        };
        this.handleError = (error, problem = "") => {
            let statusCode;
            let msg;
            if (error === null || error === void 0 ? void 0 : error.statusCode) {
                statusCode = error.statusCode;
                msg = error.msg;
                return { statusCode, msg };
            }
            if ((error === null || error === void 0 ? void 0 : error.code) == "P2025") {
                statusCode = 404;
                msg = `Not Found!`;
                return { statusCode, msg };
            }
            if ((error === null || error === void 0 ? void 0 : error.code) == "P2014") {
                statusCode = 400;
                msg = `You already have a ${problem}`;
                return { statusCode, msg };
            }
            if ((error === null || error === void 0 ? void 0 : error.code) == "P2002") {
                statusCode = 400;
                msg = `There is user with this ${error.meta.target[0]}`;
                return { statusCode, msg };
            }
            statusCode = 500;
            msg = error;
            console.log(msg);
            return { statusCode, msg };
        };
        this.validate = (user, update = false) => {
            let Schema = this.registerSchema;
            if (update) {
                Schema = this.updateSchema;
            }
            const result = Schema.validate(user);
            if (result.error) {
                throw {
                    statusCode: 400,
                    msg: result.error.details[0].message
                };
            }
            return result.value;
        };
        this.passwordValidations = {
            min: 8,
            max: 1024,
            numeric: 1,
            requirementCount: 4,
        };
        this.registerSchema = joi_1.default.object({
            name: joi_1.default.string().min(2).max(45).required(),
            phone: joi_1.default.string().min(7).max(15).required(),
            email: joi_1.default.string().min(5).max(255).email().required(),
            password: (0, joi_password_complexity_1.default)(this.passwordValidations).required(),
            confirm_password: (0, joi_password_complexity_1.default)(this.passwordValidations).required(),
        });
        this.updateSchema = joi_1.default.object({
            name: joi_1.default.string().min(2).max(45),
            phone: joi_1.default.string().min(7).max(15),
            email: joi_1.default.string().min(5).max(255).email(),
        });
    }
    constuctor() { }
}
exports.default = UserServices;
//# sourceMappingURL=User_services.js.map