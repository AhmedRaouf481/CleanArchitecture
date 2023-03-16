"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./presentation/routers/userRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api", userRouter_1.default);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});
//# sourceMappingURL=index.js.map