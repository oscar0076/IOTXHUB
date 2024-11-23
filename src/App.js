import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from './pages/Home.js';
import Courses from './pages/Courses.js'
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Courses" element={<Courses />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App