import { Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chat from "./pages/Chat"
import Notfound from "./pages/Notfound"

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
