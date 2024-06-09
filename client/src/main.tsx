import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import "../index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;
const theme = createTheme({
  typography: {
    fontFamily: "ysebeau office, fira code",
    allVariants: { color: "white" },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Toaster position="top-right" />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </AuthProvider>
);
