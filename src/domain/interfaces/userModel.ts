export interface UserModel {
    name: string
    email: string
    password: string
    phone: string
}
export interface UserRequestModel extends UserModel {
    confirm_password?: string
}
export interface UserResponseModel extends UserModel {
    id: string
}
export interface AuthUserResponseModel extends UserResponseModel {
    token: string
}