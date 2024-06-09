import { Router } from "express"
import {getAllUsers, userLogin, userSignup, verifyUser} from "../controllers/userController.js"
import {signUpValidator, validate} from "../utils/validation.js"
import { verifyToken } from "../utils/tokenManager.js"

const userRouter = Router()

userRouter.get("/", validate(signUpValidator), getAllUsers)
userRouter.post("/signup", userSignup)
userRouter.post("/login", userLogin)

userRouter.get("/auth-status",verifyToken, verifyUser)

export default userRouter