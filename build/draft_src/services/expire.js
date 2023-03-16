"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expire(tokenTime, hours) {
    let dateNow = new Date();
    let tokenLife = hours * 60 * 60 * 1000;
    if (tokenTime + tokenLife < dateNow.getTime()) {
        return true;
    }
    return false;
}
exports.default = expire;
//# sourceMappingURL=expire.js.map