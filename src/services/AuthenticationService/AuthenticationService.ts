import bcrypt from "bcryptjs"
import session from "express-session"
import AuthenticationDAL from "../../DAL/AuthenticationDAL/AuthenticationDAL";
import dbConnection from "../../dbConnection";
import { LoginDataType, RegisterDataType } from "./AuthenticationServiceTypes";


class AuthenticationService {
    private authenticationDAL: AuthenticationDAL;

    constructor() {
        this.authenticationDAL = new AuthenticationDAL(dbConnection)
    }

    async createUser(data: RegisterDataType) {
        const hashedPassword = this.encodePassword(data.password)

        try {
            let result = await this.authenticationDAL.createUser(
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
            console.log("Yopta")
            console.log(result)
        }
        catch(err) {
            throw Error(err as string)
        }
    }

    async getUserId(email: string) {
        const queryResult: any = (await this.authenticationDAL.getUserId(email)).rows
        return queryResult[0]
    }

    async loginUser(data: LoginDataType) {
        const {email, password} = data

        try {
            // TO DO: change type any to a meaningful type
            const queryResult: any = (await this.authenticationDAL.getUserPassword(email)).rows

            // return error if email was not found in the database
            if(queryResult.length === 0) return { error: "User not found" }

            const expectedPasswordHash: string = queryResult[0]["password"].trim()
            const isPasswordFound = bcrypt.compareSync(password, expectedPasswordHash)
            
            // return error if password wasn't found in the db
            if(isPasswordFound === false) return { error: "Password is incorrect" }
            
            return {}
        }
        catch(err) {
            throw Error(err as string)
        }
    }

    async updateUser(id: number, data: object) {
        console.log((await this.authenticationDAL.getUser(1)).rows)
    }

    private encodePassword(password: string) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        return hash
    }
}

export default new AuthenticationService