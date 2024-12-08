import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from './pages/Home.js';
import Courses from './pages/Courses.js';
import Shops from './pages/Shops.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/LogIn.js';
import Contact from './pages/Contact.js';
import IOTCourse from './pages/CoursesPages/IOTCourse.js'
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Courses" element={<Courses />}/>
      <Route path='/Shops' element={<Shops />}/>
      <Route path='/LogIn' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/IOTCourse' element={<IOTCourse/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App