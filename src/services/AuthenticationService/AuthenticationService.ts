import bcrypt from "bcryptjs"
import session from "express-session"
import AuthenticationDAL from "../../DAL/AuthenticationDAL/AuthenticationDAL";
import connection from "../../dbConnection";
import { LoginDataType, RegisterDataType } from "./AuthenticationServiceTypes";


class AuthenticationService {
    private authenticationDAL: AuthenticationDAL;

    constructor() {
        this.authenticationDAL = new AuthenticationDAL(connection)
    }

    createUser(data: RegisterDataType) {
        const hashedPassword = this.encodePassword(data.password)

        try {
            this.authenticationDAL.createUser(
                data.username,
                data.email,
                hashedPassword,
                data.dateOfBirth,
                data.goalType,
                data.goalDescription,
                data.theoryState,
                data.workoutExperience,
                data.gender,
                data.measurementUnits,
                Number(data.weight),
                Number(data.height)
            )
        }
        catch(err) {
            throw Error(err as string)
        }
    }

    async loginUser(data: LoginDataType) {
        const {email, password} = data

        try {
            // TO DO: change type any to a meaningful type
            const queryResult: any = (await this.authenticationDAL.getUserPassword(email)).rows

            // exit the method if email was not found in the database
            if(queryResult.length === 0) return { error: "User not found" }

            const expectedPasswordHash: string = queryResult[0]["password"].trim()
            const isPasswordFound = bcrypt.compareSync(password, expectedPasswordHash)
            
            if(isPasswordFound === false) {
                return { error: "Password is incorrect" }
            }

            
            
            return {}
        }
        catch(err) {
            throw Error(err as string)
        }
    }

    // private createUserSession(email, password) {
        
    // }

    private encodePassword(password: string) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        return hash
    }
}

export default new AuthenticationService