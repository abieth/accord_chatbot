import { Router } from "express"
import chatRoutes from "./chatRoutes.js"
import userRoutes from "./userRoutes.js"

const router = Router()

router.use("/user", userRoutes)
router.use("/chats", chatRoutes)
// router.get("/", (req, res) => {
//   res.send("hello")
// })

export default router




