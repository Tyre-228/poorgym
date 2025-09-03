import WorkoutDAL from "../../DAL/WorkoutDAL";
import dbConnection from "../../dbConnection";

class WorkoutService {
    workoutDAL: WorkoutDAL

    constructor() {
        this.workoutDAL = new WorkoutDAL(dbConnection)
    }

    public async addWorkout(userId: number, workoutName: string, day: string, muscles: string) {
        try {
            await this.workoutDAL.addWorkout(userId, workoutName, day, muscles)

            return {}
        }
        catch(err) {
            console.log(err as string)
            return { error: "Server error", status: 500 }
        }
    }

    public async addExercise() {
        
    }
}


export default new WorkoutService