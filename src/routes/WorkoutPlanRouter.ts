import { Router } from "express"
import { parseUserIdCookie } from "../helpers"
import WorkoutService from "../services/WorkoutService/WorkoutService"
import AuthenticationService from "../services/AuthenticationService/AuthenticationService"

const workoutPlanRouter = Router()

workoutPlanRouter.post("/workoutPlans", async (req, res): Promise<any> => {
    if(!req.headers || !req.headers.cookie?.includes("userId")) {
        return res.status(400).json({ "message": "User not found" })
    }
    
    const userId = parseUserIdCookie(req.headers.cookie as string)
    const isUserFound = await (AuthenticationService).checkForUser(userId)

    if(isUserFound) {
        return res.status(400).json({ "message": "User not found" })
    }
    
    const {workoutName, day, muscles} = req.body
    const { error, status } = await (WorkoutService).addWorkout(userId, workoutName, day, muscles)

    if(error) {
        return res.status(status as number).json({ "message": error })
    }

    return res.status(201).json({ message: "Workout created" })
})

export default workoutPlanRouter