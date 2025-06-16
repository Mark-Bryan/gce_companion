import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import QuizPage from "./pages/QuizPage";
import Profile from "./pages/Profile";

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;