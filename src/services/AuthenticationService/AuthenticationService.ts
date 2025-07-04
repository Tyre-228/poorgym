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
        let queryResult

        try {
            // TO DO: change type any to a meaningful type
            queryResult = (await this.authenticationDAL.getUserPassword(email)).rows
        }
        catch(err) {
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }

        // return error if email was not found in the database
        if(queryResult.length === 0) return { error: "User not found", status: 400 }

        const expectedPasswordHash: string = queryResult[0]["password"].trim()
        const isPasswordFound = bcrypt.compareSync(password, expectedPasswordHash)
        
        // return error if password wasn't found in the db
        if(isPasswordFound === false) return { error: "Password is incorrect", status: 400 }
        
        return {}
    }

    // TO DO: finish the method
    public async updateUser(id: number, data: object) {
        console.log((await this.authenticationDAL.getUser(1)).rows)
    }

    // TO DO: test this method
    public async deleteUser(userId: number, email: string, password: string) {
        let userData: UserDataType
        try {
            userData = (await this.authenticationDAL.getUser(userId)).rows[0]
        }
        catch(err) {
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }

        if(!userData) {
            return { error: "Invalid user id", status: 400 }
        }

        if(userData["email"] !== email || !bcrypt.compareSync(password, userData["password"].trim())) {
            return { error: "Invalid data", status: 400 }
        }

        this.authenticationDAL.deleteUser(userId)
        return {}
        
    }

    public async checkForUser(userId: number) {
        let userData
        try {
            userData = (await this.authenticationDAL.getUser(userId)).rows[0]
        }
        catch(err) {
            console.log(Error(err as string))
            return { error: "Server error", status: 500 }
        }

        return userData !== undefined ? true : false
    }
}

export default new AuthenticationService