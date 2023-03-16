import { Request, Response } from "express";
import { userDbInterface } from "../../data/interfaces/userDbInterface";
import { UserUseCases } from "../../domain/use-cases/UserUseCases";


class UserController {
    private user_use_cases: UserUseCases;

    constructor(db: userDbInterface) {
        this.user_use_cases = new UserUseCases(db)
    }

    public post_user = async (req: Request, res: Response) => {
        try {
            const user = await this.user_use_cases.createUser(req.body)
            return res.status(201).json(user)
        } catch (err: any) {
            console.log(err);

            return res.status(err?.statusCode ? err.statusCode : 500).json(err)
        }
    }

    public get_user = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const user = await this.user_use_cases.getOneUser(id)
            return res.status(200).json(user)
        } catch (err: any) {
            console.log(err);

            return res.status(err?.statusCode ? err.statusCode : 500).json(err)
        }
    }

    public get_all_users = async (req: Request, res: Response) => {
        try {
            const user = await this.user_use_cases.getAllUsers()
            return res.status(200).json(user)
        } catch (err: any) {
            console.log(err);

            return res.status(err?.statusCode ? err.statusCode : 500).json(err)
        }
    }

    public put_user = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const user = await this.user_use_cases.updateOneUser(id, req.body)
            return res.status(200).json(user)
        } catch (err: any) {
            console.log(err);

            return res.status(err?.statusCode ? err.statusCode : 500).json(err)
        }
    }

    public delete_user = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            await this.user_use_cases.deleteOneUser(id)
            return res.status(200).json({ msg: "Deleted successfuly" })
        } catch (err: any) {
            console.log(err);

            return res.status(err?.statusCode ? err.statusCode : 500).json(err)
        }
    }
}

export { UserController }