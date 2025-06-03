import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import authenticationRouter from './src/routes/AuthenticationRoutes'
import cors from "cors"
import session from "express-session"


dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(cors())
app.use(authenticationRouter)


app.listen(process.env.PORT, async () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})