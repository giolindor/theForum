import { Routes, Route } from 'react-router-dom'   
import { useState } from 'react'
import LandingPage from "./pages/LandingPage";
import SignUp from './pages/SignUpPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
  )
}

export default App;
