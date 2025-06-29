import { Client } from "pg";

class AuthenticationDAL {
    connection: Client;

    constructor(connection: Client) {
        this.connection = connection
    }

    createUser(username: string, email: string, password: string, dob: string, goalType: string, goalDesctiption: string, theoryState: string, lifestyleActivity: string, gender: string, measurementUnits: string, weight: number, height: number) {
        return this.connection.query(`INSERT INTO Users
            (Username, Email, Password, DateOfBirth, GoalType, Goal, TheoryState, LifestyleActivity, Gender, MeasurementUnits, Weight, Height, BeginnerCourseCounter) 
            VALUES('${username}', '${email}', '${password}', '${dob}', '${goalType}', '${goalDesctiption}', '${theoryState}', '${lifestyleActivity}', '${gender}', '${measurementUnits}', '${weight}', '${height}', '${0}');`)
    }

    getUserPassword(email: string) {
        return this.connection.query(`SELECT password FROM Users WHERE email='${email}';`)
    }

    getUserId(email: string) {
        return this.connection.query(`SELECT id FROM Users WHERE email='${email}';`)
    }

    getUser(id: number) {
        return this.connection.query(`SELECT * FROM Users WHERE id='${id}';`)
    }

    deleteUser(id: number) {
        return this.connection.query(`DELETE FROM Users WHERE id='${id}'`)
    }
}

export default AuthenticationDAL