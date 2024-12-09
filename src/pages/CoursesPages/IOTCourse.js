import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import ContactSection from '../../components/ContactSection';
import IconsSection from '../../components/IconsSection';
import '../../stylehome.css';
import Iot from '../../components/CoursesComponenets/Iot';
const IOTCourse = () => {
    return (
        <div className="App">
        <Header />
        <main>
          <Iot />
          <Testimonials />
          <IconsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
};

export default IOTCourse;