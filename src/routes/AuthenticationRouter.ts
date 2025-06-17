import { Router } from "express";
import AuthenticationService from "../services/AuthenticationService/AuthenticationService";

const authenticationRouter = Router()

authenticationRouter.post("/login", async (req, res): Promise<any> => {
    let error
    try {
        error = await AuthenticationService.loginUser(req.body)
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({ "status": "Server error" })
    }

    if(Object.keys(error).length > 0) {
        return res.status(400).json(error)
    }

    const userId = await AuthenticationService.getUserId(req.body.email)
    req.session.userId = userId
    res.cookie("userId", userId)

    return res.status(201).json({ "status": "Success" })
})

// TO DO: try to remove async without causing an error
authenticationRouter.post("/signup", async (req, res): Promise<any> => {
    try {
       await  AuthenticationService.createUser(req.body)
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({ "status": "Server error" })
    }
    // if no errors
    const userId = await AuthenticationService.getUserId(req.body.email)

    req.session.userId = userId
    res.cookie("userId", userId)

    return res.status(201).json({ "status": "Success" })
})

authenticationRouter.put("/account", async (req, res): Promise<any> => {
    try {
        const id = req.session.userId as number
        const data = req.body

        await AuthenticationService.updateUser(id, data)
    }
    catch(err) {
        return res.status(500).json({ "status": "Server error" })
    }


})

authenticationRouter.post("/logout", async (req, res): Promise<any> => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send({ "message": "Failed to destroy session" });
        }
        
        res.clearCookie("userId")
        res.status(200).send({ "message": "Session destroyed" });
    });
})

export default authenticationRouter