import Joi from "joi";
import jwt from "jsonwebtoken";
import passwordComplexity from "joi-password-complexity";
import { UserRequestModel } from "../interfaces/userModel";


export default class UserServices {
    constuctor() { }

    createToken = (payload: string | object) => {
        const token = jwt.sign(payload, process.env.JWT_SECRET as string);
        return token;
    };


    handleError = (error: any, problem: string = "") => {
        let statusCode: number;
        let msg: string | object;
        //Not Found Error
        if (error?.statusCode) {
            statusCode = error.statusCode
            msg = error.msg
            return { statusCode, msg }
        }
        if (error?.code == "P2025") {
            statusCode = 404
            msg = `Not Found!`
            return { statusCode, msg }
        }
        // Error for connect value to existing one-one or one-many realation
        if (error?.code == "P2014") {
            statusCode = 400
            msg = `You already have a ${problem}`
            return { statusCode, msg }
        }
        // Error for adding existig unique values
        if (error?.code == "P2002") {
            statusCode = 400
            msg = `There is user with this ${error.meta.target[0]}`
            return { statusCode, msg }
        }
        statusCode = 500
        msg = error
        console.log(msg);

        return { statusCode, msg }
    }

    validate = (user: UserRequestModel, update: boolean = false) => {
        let Schema: Joi.ObjectSchema = this.registerSchema
        if (update) {
            Schema = this.updateSchema
        }
        const result = Schema.validate(user);
        if (result.error) {
            throw {
                statusCode: 400,
                msg: result.error.details[0].message

            }
        }
        return result.value
    };


    private passwordValidations = {
        min: 8,
        max: 1024,
        numeric: 1,
        requirementCount: 4,
    };

    private registerSchema = Joi.object({
        name: Joi.string().min(2).max(45).required(),
        phone: Joi.string().min(7).max(15).required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: passwordComplexity(this.passwordValidations).required(),
        confirm_password: passwordComplexity(this.passwordValidations).required(),
    });

    private updateSchema = Joi.object({
        name: Joi.string().min(2).max(45),
        phone: Joi.string().min(7).max(15),
        email: Joi.string().min(5).max(255).email(),
    });



}