import { Router } from "express"
import { verifyToken } from "../utils/tokenManager.js"
import { chatCompletionValidator, validate } from "../utils/validators.js"
import {generateChatCompletion} from "../controllers/chatController.js"

const chatRoutes = Router()
chatRoutes.post("/new", validate(chatCompletionValidator), generateChatCompletion, verifyToken)

export default chatRoutes