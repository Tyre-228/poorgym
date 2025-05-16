import { Router } from "express";

const authenticationRouter = Router()

authenticationRouter.post("/login", (req, res) => {
    res.json({"message": "Hello World!"})
})

authenticationRouter.post("/signup", (req, res) => {
    res.json({"message": "Hello World!"})
})

export default authenticationRouter