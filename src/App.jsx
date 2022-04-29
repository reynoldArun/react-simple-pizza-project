import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Login from './routing/Login'
import Register from './routing/Register'
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App