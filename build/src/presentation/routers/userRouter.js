"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserDataAccess_1 = require("../../data/data-access/UserDataAccess");
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
const db = new UserDataAccess_1.UserDataAccess();
const userController = new UserController_1.UserController(db);
router.post("/user", userController.post_user);
router.get("/user/:id", userController.get_user);
router.get("/user", userController.get_all_users);
router.put("/user/:id", userController.put_user);
router.delete("/user/:id", userController.delete_user);
exports.default = router;
//# sourceMappingURL=userRouter.js.map