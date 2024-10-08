import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState} from 'react'
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import ProtectedRoute from "./components/protectedRoute"

function App() {
  

  return (
      <div>
        <BrowserRouter>
           <Routes>
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
           </Routes>
            
        </BrowserRouter>
      </div>
  )
}

export default App
