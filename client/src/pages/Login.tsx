import React from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext";
import {toast} from  "react-hot-toast"
import {IoIosLogIn} from "react-icons/io"
import {Box, Typography, Button} from "@mui/material"
import CustomizedInput from "../component/shared/CustomizedInput"
const Login: React.FC = () => {
  const auth = useAuth()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    try {
      toast.loading("SIGNING IN", {id: "login"})
      await auth?.login(email, password)
      toast.success("SIGNED IN SUCCESSFULLY", {id: "login"})
    } catch(error) {
      console.log(EvalError)
      toast.error("SIGINING IN FAILED", {id: "login"})
    }
  }
  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="gemini" alt="img" style={{width: "400px"}}/>
      </Box>
      <Box display={"flex"} flex={{ xs: 1, md: 0.5 }} justifyContent={"center"} alignItems={"center"} padding={2} ml={"auto"} mt={16}>
        <form onSubmit={handleSubmit} style={{
          margin: "auto",
          padding: "30px",
          boxShadow: "10px 10px 20px #000",
          borderRadius: "none",
          border: "none"
        }}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Typography variant="h4" textAlign={"center"} padding={2} fontWeight={600}>
              LOGIN
            </Typography>
            <CustomizedInput type="email" label="Email" name="email"/>
            <CustomizedInput type="password" label="Password" name="password" />
            <Button type="submit" sx={{
              px: 2, py: 1, mt: 2, width: "400px", borderRadius: 2, bgcolor: "#00fffc", ":hover": {
                bgcolor: "white",
                color: "black",

              }
            }}
              endIcon={<IoIosLogIn />}
            >
              LOGIN
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login
