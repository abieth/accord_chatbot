import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useAuth } from "../context/AuthContext";
import Logo from "./shared/Logo";
import Navigation from "./shared/Navigation";
const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <Navigation
                bg="#00fffc"
                to="/chat"
                text="GO TO CHAT"
                textColor="black"
              />
              <Navigation
                bg="#51538f"
                to="/logout"
                text="LOGOUT"
                textColor="white"
              />
              <Navigation
                bg="#51538f"
                to="/logout"
                text="LOGOUT"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <Navigation
                bg="#00fffc"
                to="/login"
                text="LOGIN"
                textColor="black"
              />
              <Navigation
                bg="#51538f"
                to="/signup"
                text="SIGNUP"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
