import { Client } from "pg";

class WorkoutDAL {
    connection: Client;

    constructor(connection: Client) {
        this.connection = connection
    }

    addWorkout(userId: number, workoutName: string, day: string, muscles: string) {
        console.log("DB layer")
        return this.connection.query(`INSERT INTO WorkoutPlans(UserId, Name, Day, Muscles) VALUES('${userId}', '${workoutName}', '${day}', '${muscles}');`)
    }
}


export default WorkoutDAL