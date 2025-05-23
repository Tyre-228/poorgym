import { Router } from "express";
import AuthenticationService from "../services/AuthenticationService/AuthenticationService";

const authenticationRouter = Router()

authenticationRouter.post("/login", async (req, res): Promise<any> => {
    let result
    try {
        result = await AuthenticationService.loginUser(req.body)
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({ "status": "Server error" })
    }

    if(Object.keys(result).length > 0) {
        return res.status(422).json(result)
    }

    return res.status(201).json({ "status": "Success" })
})

// TO DO: try to remove async without causing an error
authenticationRouter.post("/signup", async (req, res): Promise<any> => {
    try {
        AuthenticationService.createUser(req.body)
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({ "status": "Server error" })
    }
    return res.status(201).json({ "status": "Success" })
})

export default authenticationRouter