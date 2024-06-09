import User from "../models/User.js"
import bcrypt from "bcrypt"
import { createToken } from "../utils/tokenManager.js"
import { cookie_name } from "../utils/constants.js"
export const userSignup = async (req, res, next) => {
  const {name, email, password} = req.body
  try {
    const existingUser = User.findOne({ email: email })
    if (existingUser) {
      return res.status(401).send("Email already registered!")
    }
    const hashedPassword = bcrypt.hash(password, 20)
    const user = await User.create({ name, email, password: hashedPassword })
    res.clearCookie(cookie_name, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/"
    })
    const token = createToken(existingUser._id.toString(), existingUser.email, "7d")
    const expires = new Date()
    expires.setDate(expires.getDate() + 7)
    res.cookie(cookie_name, token, {path: "/", domain: "localhost", expires, httpOnly: true, signed: true})
    next() 
    return res.status(201).json({message: "OK", name: user.name, email: user.email})
  } catch (error) {
    console.log(err.message)
    return res.status(500).json(error.message)
  }
}


export const verifyUser = async (req, res, next) => {
  // const {email, password} = req.body
  try {
    const existingUser = await User.findById({ email: res.locals.jwtData.id })
    if (!existingUser) {
      return res.status(401).send("User not registered or Token malfunctioned")
    } 
    console.log(existingUser._id.toString(), res.locals.jwtData.id)
    if (existingUser._id.toString() === res.locals.jwtData.id) {
      return res.status(401).send("Permission didn't match")
    }

    // const isPassword = await bcrypt.compare(password, existingUser.password)
    // if (!isPassword) {
    //   return res.status(401).send("Password incorrect")
    // }
    // res.clearCookie(cookie_name, {
    //   httpOnly: true,
    //   domain: "localhost",
    //   signed: true,
    //   path: "/"
    // })
    // const token = createToken(existingUser._id.toString(), existingUser.email, "7d")
    // const expires = new Date()
    // expires.setDate(expires.getDate() + 7)
    // res.cookie(cookie_name, token, {path: "/", domain: "localhost", expires, httpOnly: true, signed: true})
    // next()

    return res.status(200).json({message: "OK", name: existingUser.name, email: existingUser.email})
  } catch (error) {
    console.log(error.message)
    return res.status(500).json(error.message)
  }
}


export const userLogin = async (req, res, next) => {
  const {email, password} = req.body
  try {
    const existingUser = await User.findOne({ email: email })
    if (!existingUser) {
      return res.status(401).send("User not registered")
    } 
    const isPassword = await bcrypt.compare(password, existingUser.password)
    if (!isPassword) {
      return res.status(401).send("Password incorrect")
    }
    res.clearCookie(cookie_name, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/"
    })
    const token = createToken(existingUser._id.toString(), existingUser.email, "7d")
    const expires = new Date()
    expires.setDate(expires.getDate() + 7)
    res.cookie(cookie_name, token, {path: "/", domain: "localhost", expires, httpOnly: true, signed: true})
    next()
    return res.status(200).json({message: "OK", name: existingUser.name, email: existingUser.email})
  } catch (error) {
    console.log(error.message)
    return res.status(500).json(error.message)
  }
}
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    next() 
    return res.status(200).json({users})
  } catch (error) {
    console.log(error.message)
    return res.status(500).json(error.message)
  }
}
