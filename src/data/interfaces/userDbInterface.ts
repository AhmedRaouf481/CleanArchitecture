import { UserModel, UserRequestModel, UserResponseModel } from "../../domain/interfaces/userModel";

export interface userDbInterface {
    create(user: UserModel): Promise<UserResponseModel>;
    getAll(): Promise<UserResponseModel[]>
    getOne(id: string): Promise<UserResponseModel>
    updateOne(id: string, data: UserModel): Promise<UserResponseModel>
    deleteOne(id: string): void;
}