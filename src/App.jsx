import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Login from './routing/Login'
import Register from './routing/Register'
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App