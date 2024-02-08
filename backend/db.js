import dotenv from "dotenv"
dotenv.config()
import pgPromise from "pg-promise"
const pgp = pgPromise()
const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}
export default pgp(cn)