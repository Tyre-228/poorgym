import { Client } from "pg";

class AuthenticationDAL {
    connection: Client;

    constructor(connection: Client) {
        this.connection = connection
    }

    createUser(username: string, email: string, password: string, dob: string, goalType: string, goalDesctiption: string, theoryState: string, workoutExperience: string, gender: string, measurementUnits: string, weight: number, height: number) {
        this.connection.query(`INSERT INTO Users
            (Username, Email, Password, DateOfBirth, GoalType, Goal, TheoryState, WorkoutExperience, Gender, MeasurementUnits, Weight, Height, BeginnerCourseCounter) 
            VALUES('${username}', '${email}', '${password}', '${dob}', '${goalType}', '${goalDesctiption}', '${theoryState}', '${workoutExperience}', '${gender}', '${measurementUnits}', '${weight}', '${height}', '${0}');`)
    }

    getUserPassword(email: string) {
        return this.connection.query(`SELECT password FROM Users WHERE email='${email}';`)
    }

    getUserId(email: string, password: string) {
        return this.connection.query(`SELECT id FROM Users WHERE email='${email}' AND password='${password}'`)
    }
}

export default AuthenticationDAL