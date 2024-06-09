import axios from "axios"
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/users/login", { email, password })
  if (res.status !== 200) {
    throw new Error("UNABLE TO LOGIN")
  }
  const data = await res.data
  return data
}

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status")
  if (res.status !== 200) {
    throw new Error("UNABLE TO AUTHENTICATE")
  }
  const data = await res.data
  return data
}