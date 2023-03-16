"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
const passwordValidations = {
    min: 8,
    max: 1024,
    numeric: 1,
    requirementCount: 4,
};
const registerSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).max(45).required(),
    phone: joi_1.default.string().min(7).max(15).required(),
    email: joi_1.default.string().min(5).max(255).email().required(),
    password: (0, joi_password_complexity_1.default)(passwordValidations).required(),
    confirm_password: (0, joi_password_complexity_1.default)(passwordValidations).required(),
});
const updateSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).max(45),
    phone: joi_1.default.string().min(7).max(15),
    email: joi_1.default.string().min(5).max(255).email(),
});
const validateUser = (user, Schema = registerSchema, update) => {
    if (update) {
        Schema = updateSchema;
    }
    return Schema.validate(user);
};
exports.default = validateUser;
//# sourceMappingURL=user-schema.js.map