import { Router } from "express";
import AuthenticationService from "../services/AuthenticationService/AuthenticationService";
import { parseUserIdCookie } from "../helpers";

const authenticationRouter = Router()


authenticationRouter.post("/login", async (req, res): Promise<any> => {
    let { error, status} = await AuthenticationService.loginUser(req.body)

    if(error) {
        return res.status(status as number).json({ "error": error })
    }

    const userId = await AuthenticationService.getUserId(req.body.email)
    req.session.userId = userId
    res.cookie("userId", userId)

    return res.status(201).json({ "status": "Success" })
})


// TO DO: try to remove async without causing an error
authenticationRouter.post("/signup", async (req, res): Promise<any> => {
    const { error, status } = await AuthenticationService.createUser(req.body)
    
    if(error) {
        return res.status(status as number).json({ "error": error })
    }
    // if no errors
    const userId = await AuthenticationService.getUserId(req.body.email)

    req.session.userId = userId
    res.cookie("userId", userId)

    return res.status(201).json({ "status": "Success" })
})


authenticationRouter.patch("/account", async (req, res): Promise<any> => {
    const id = req.session.userId as number
    const data = req.body

    await AuthenticationService.updateUser(id, data)
})


authenticationRouter.post("/logout", async (req, res): Promise<any> => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ "error": "Failed to destroy session" });
        }

        res.clearCookie("userId")
        res.status(200).json({ "message": "Session destroyed" });
    });
})

authenticationRouter.delete("/account", async (req, res): Promise<any> => {
    if(!req.headers.cookie?.includes("userId")) {
        return res.status(403).json({ "message": "Cookie is missing" })
    }
    const userId = parseUserIdCookie(req.headers.cookie)
    // TO DO: change error variable to an object
    const error = await (AuthenticationService).deleteUser(userId, req.body.email, req.body.password)

    if(error) {
        return res.status(error.status as number).json({ "message": error.error })
    }

    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ "error": "Failed to destroy session" });
        }

        res.clearCookie("userId")
    })

    return res.status(201).json({ "message": "User deleted" })
}) 

export default authenticationRouter