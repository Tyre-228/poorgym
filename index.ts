import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import IORedis from 'ioredis'
import RedisStore from "connect-redis"
import cors from "cors"
import session from "express-session"

import authenticationRouter from './src/routes/AuthenticationRouter'
import workoutPlanRouter from './src/routes/WorkoutPlanRouter'
import exerciseRouter from './src/routes/ExerciseRouter'


declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}


dotenv.config()
const app = express()
// const redisClient = new IORedis(process.env.REDIS_URL as string)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
  // store: new RedisStore({ client: redisConnection }),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: true,
    maxAge: 60000 * 60
  }
}));
app.use(cors())
app.use(authenticationRouter)
app.use(workoutPlanRouter)
app.use(exerciseRouter)


app.listen(process.env.PORT, async () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})





// link to exerciseDB
// https://exercisedb.p.rapidapi.com