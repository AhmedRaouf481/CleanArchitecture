import { DbInterface } from "../interfaces/userDbInterface";
import { UserModel, UserResponseModel } from "../../domain/interfaces/userModel";
import { PrismaClient } from "@prisma/client";


export class UserDataAccess implements DbInterface<UserModel, UserResponseModel> {
    private db: PrismaClient;
    constructor() {
        this.db = new PrismaClient();
    }
    async create(user: UserModel): Promise<UserResponseModel> {
        try {
            const newUser = await this.db.user.create({
                data: user
            })
            return newUser
        } catch (err: any) {
            throw new Error(err);
        }
    }
    async getAll(): Promise<UserResponseModel[]> {
        try {
            const users = await this.db.user.findMany()
            return users
        } catch (err: any) {
            throw err;
        }
    }
    async getOne(id: string): Promise<UserResponseModel> {
        try {
            const user = await this.db.user.findUniqueOrThrow({
                where: {
                    id
                }
            })
            return user
        } catch (err: any) {
            throw err;
        }
    }
    async updateOne(id: string, data: UserModel) {
        try {
            const user = await this.db.user.update({
                where: {
                    id
                },
                data
            })
            return user
        } catch (err: any) {
            throw err;
        }
    }
    async deleteOne(id: string) {
        try {
            await this.db.user.delete({
                where: {
                    id
                }
            })
        } catch (err: any) {
            throw err;
        }
    }

}