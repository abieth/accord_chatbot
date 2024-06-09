import mongoose from "mongoose"
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected")
  } catch (error) {
    console.error(error.message)
  }
}
