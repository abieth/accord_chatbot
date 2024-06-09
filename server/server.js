import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config()
import { connectDB } from "./src/db/db.js"
connectDB()
import appRouter from "./src/Routes/index.js"
const app = express()
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser(process.env.cookie))
app.use("/api/v1", appRouter)

app.listen(3000, console.log("sever running in port 3000"))

