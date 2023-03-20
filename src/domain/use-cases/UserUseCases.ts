import { DbInterface } from "../../data/interfaces/userDbInterface";
import { AuthUserResponseModel, UserModel, UserRequestModel, UserResponseModel } from "../interfaces/userModel";
import UserServices from "../services/UserServices";


export class UserUseCases {
    private services: UserServices
    constructor(private db: DbInterface<UserModel, UserResponseModel>) {
        this.services = new UserServices()
    }

    async createUser(user: UserRequestModel): Promise<AuthUserResponseModel> {
        try {
            user = this.services.validate(user)
            if (user.password !== user.confirm_password) {
                const err = {
                    statusCode: 400,
                    msg: "Password didn't match"
                }
                throw this.services.handleError(err)
            }
            delete user.confirm_password
            const newUser = await this.db.create(user)
            const token: string = this.services.createToken(newUser.id)
            return {
                ...newUser,
                token
            }
        } catch (err: any) {
            const error = this.services.handleError(err)
            throw error;
        }
    }

    async getOneUser(id: string): Promise<UserResponseModel> {
        try {

            const user = await this.db.getOne(id)
            return user
        } catch (err: any) {
            const error = this.services.handleError(err)
            throw error;

        }
    }

    async getAllUsers(): Promise<UserResponseModel[]> {
        try {
            const users = await this.db.getAll()
            return users
        } catch (err: any) {
            const error = this.services.handleError(err)
            throw error;
        }
    }

    async updateOneUser(id: string, data: UserModel): Promise<UserResponseModel> {
        try {
            const updates = this.services.validate(data, true)

            const user = await this.db.updateOne(id, updates)
            return user
        } catch (err: any) {
            const error = this.services.handleError(err)
            throw error;

        }
    }

    async deleteOneUser(id: string) {
        try {
            await this.db.deleteOne(id)
        } catch (err: any) {
            const error = this.services.handleError(err)
            throw error;

        }
    }
}