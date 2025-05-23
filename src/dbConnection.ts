import { Client } from "pg"
import dotenv from 'dotenv'

dotenv.config()

const connection = new Client({
    user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_NAME,
	ssl: true,
})

connection
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err: Error) => {
		console.error('Error connecting to PostgreSQL database', err);
	});


export default connection