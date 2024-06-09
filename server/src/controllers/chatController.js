import { configureOpenAI } from "../config/openai-config"
import User from "../models/User.js"
import {OpenAIApi, chatCompletionRequestMessage} from "openai"
export const genrateChatCompletion = async (req, res, next) => {
  const { message } = req.body
  try {
    const user = await User.findById(res.locals.jwtData.id)
    if (!user) {
      return res.status(401).send({ message: "User not registered OR token malfunctioned" })
    }
  
    //Grab chats of user
    const chats = user.chats.map(({ role, content }) => ({ role, content }))
    chats.push({ content: message, role: "user" })
    user.chats.push({content: message, role: "user"})
    //send all chats with the new one to the openai api
    const config = configureOpenAI()
    const openai = new OpenAIApi(config)
    //get latest response
    const chatResponse = await openai.createChatCompletion({ model: "gpt-3.5-turbo", messages: chats })
    user.chats.push(chatResponse.data.choices[0].message)
    await user.save()
    return res.status(200).json({chats: user.chats })
  } catch (err) {
    console.log(err)
    return res.status(500).json({message: "something went wrong"})
  }
}