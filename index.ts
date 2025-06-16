import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import IORedis from 'ioredis'
import RedisStore from "connect-redis"
import authenticationRouter from './src/routes/AuthenticationRouter'
import cors from "cors"
import session from "express-session"

import redisConnection from './src/redisConnection'
import workoutPlanRouter from './src/routes/WorkoutPlanRouter'

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
  cookie: { secure: true }
}));
app.use(cors())
app.use(authenticationRouter)
app.use(workoutPlanRouter)


app.listen(process.env.PORT, async () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})





// link to exerciseDB
// https://exercisedb.p.rapidapi.com