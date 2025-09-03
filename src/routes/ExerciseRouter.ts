import { Router } from "express"
import dotenv from "dotenv"
import ExerciseService from "../services/ExerciseService/ExerciseService"

dotenv.config()

const exerciseRouter = Router()

exerciseRouter.get("/exercises", async (req, res): Promise<any> => {
    let limit = 20
    let offset = 0
    let muscleGroup = ""
    let name = ""

    if("name" in req.query) {
        name = req.query.name as string
    }
    else if("muscleGroup" in req.query) {
        muscleGroup = req.query.name as string
    }
    if("limit" in req.query) {
        limit = parseInt(req.query.limit as string)
    }
    if("offset" in req.query) {
        offset = parseInt(req.query.offset as string)
    }

    const data = await ExerciseService.getExercises(name, muscleGroup, limit, offset)

    if("error" in data) {
        return res.status(data.status as number).json({ "message": data.error })
    }
    
    return res.status(200).json(data)
})

exerciseRouter.get("/exercises/:id", async (req, res): Promise<any> => {
    const id = req.params.id
    const data = await ExerciseService.getExercise(id)

    if("error" in data) {
        return res.status(data.status as number).json({ "message": data.error })
    }
    
    return res.status(200).json(data)
})


export default exerciseRouter