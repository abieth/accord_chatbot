import React from 'react'
import { Link } from 'react-router-dom'
import Typography from "@mui/material/Typography"

const Logo = () => {
  return (
    <div style={{display: "flex", alignItems: "center", marginRight: "auto", gap: "8px"}}>
      <Link to={"/"}>
        <span style={{fontSize: "30px"}}>GEMINI</span>
      </Link>
      <Typography sx={{display: {md: "block", sm: "none", xs: "none"}, mr: "auto", fontWeight: "800", textShadow: "2px 2px 20px #000"}}>
      <span style={{fontSize: "20px"}}>GDG</span>
      </Typography>
    </div>
  )
}

export default Logo
