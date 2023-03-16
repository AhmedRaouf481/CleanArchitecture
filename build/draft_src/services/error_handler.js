"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (error, problem = "") => {
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
exports.handleError = handleError;
//# sourceMappingURL=error_handler.js.map