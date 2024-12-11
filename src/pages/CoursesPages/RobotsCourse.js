import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import ContactSection from '../../components/ContactSection';
import IconsSection from '../../components/IconsSection';
import '../../stylehome.css';
import Robots from '../../components/CoursesComponenets/Robots';
const IOTCourse = () => {
    return (
        <div className="App">
        <Header />
        <main>
          <Robots />
          <Testimonials />
          <IconsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
};

export default IOTCourse;