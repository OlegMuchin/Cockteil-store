import express from 'express';
import dotenv from "dotenv"
import routers from "./routes/index.js"
import cors from "cors"
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use("/api", routers)

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000
        app.listen(PORT, ()=> {
            console.log(`Server started on PORT:${PORT}.`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()