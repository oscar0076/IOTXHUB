import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import IconsSection from '../components/IconsSection';
import ContactSection from '../components/ContactSection';
import RobotCourses from '../components/RobotCourses';
import courses from '../backgroundimage/courses/courses.png';
import CoursesCards from '../components/CoursesCards';
import '../stylehome.css';

const Courses = () => {
  const history = useNavigate();



  return (
    <div className="App">
      <Header />
      <main>
        <RobotCourses />
        <CoursesCards />
        <Testimonials />
        <IconsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
