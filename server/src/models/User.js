import mongoose from "mongoose"
const chatsSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  }
})

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatsSchema]
})

export default mongoose.model("User", UserSchema)