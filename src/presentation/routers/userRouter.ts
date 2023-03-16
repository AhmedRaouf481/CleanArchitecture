import express, { Request, Response } from "express";
import { UserDataAccess } from "../../data/data-access/UserDataAccess";
import { UserController } from "../controllers/UserController";

const router = express.Router()

const db = new UserDataAccess()
const userController = new UserController(db)


router.post("/user", userController.post_user)
router.get("/user/:id", userController.get_user)
router.get("/user", userController.get_all_users)
router.put("/user/:id", userController.put_user)
router.delete("/user/:id", userController.delete_user)

export default router