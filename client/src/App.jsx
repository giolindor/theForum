import { Routes, Route } from 'react-router-dom'   
import { useState } from 'react'
import LandingPage from "./pages/LandingPage";
import SignUp from './pages/SignUpPage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
  )
}

export default App;
