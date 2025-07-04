import bcrypt from "bcryptjs"
import session from "express-session"
import AuthenticationDAL from "../../DAL/AuthenticationDAL";
import dbConnection from "../../dbConnection";
import { LoginDataType, UserDataType } from "./AuthenticationServiceTypes";
import { encodePassword } from "../../helpers";


class AuthenticationService {
    private authenticationDAL: AuthenticationDAL;

    constructor() {
        this.authenticationDAL = new AuthenticationDAL(dbConnection)
    }

    public async createUser(data: UserDataType) {
        const hashedPassword = encodePassword(data.password)

        try {
            await this.authenticationDAL.createUser(
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
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }

        return {}
    }

    public async getUserId(email: string) {
        const queryResult: any = (await this.authenticationDAL.getUserId(email)).rows
        return queryResult[0]
    }

    public async loginUser(data: LoginDataType) {
        const { email, password } = data

        try {
            // TO DO: change type any to a meaningful type
            const queryResult: any = (await this.authenticationDAL.getUserPassword(email)).rows

            // return error if email was not found in the database
            if(queryResult.length === 0) return { error: "User not found", status: 400 }

            const expectedPasswordHash: string = queryResult[0]["password"].trim()
            const isPasswordFound = bcrypt.compareSync(password, expectedPasswordHash)
            
            // return error if password wasn't found in the db
            if(isPasswordFound === false) return { error: "Password is incorrect", status: 400 }
            
            return {}
        }
        catch(err) {
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }
    }

    public async updateUser(id: number, data: object) {
        console.log((await this.authenticationDAL.getUser(1)).rows)
    }

    // TO DO: test this method
    public async deleteUser(userId: number, email: string, password: string) {
        try {
            const userData: UserDataType = (await this.authenticationDAL.getUser(userId)).rows[0]

            if(userData) {
                if(userData["email"] === email && bcrypt.compareSync(password, userData["password"].trim())) {
                    this.authenticationDAL.deleteUser(userId)

                    return {}
                }
            }
            return { error: "Invalid data", status: 400 }
        }
        catch(err) {
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }
    }

    public async checkForUser(userId: number) {
        try {
            const userData = (await this.authenticationDAL.getUser(userId)).rows[0]

            return userData !== undefined ? true : false
        }
        catch(err) {
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }
    }
}

export default new AuthenticationService