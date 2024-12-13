import React from 'react';
import Header from '../../components/Header';
import Testimonials from '../../components/Testimonials';
import IconsSection from '../../components/IconsSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Microcontrollers from '../../components/ShopComponents/Microcontrollers'
import '../../stylehome.css';
const MicrocontrollersPage = () => {
    return (
        <div className="App">
      <Header />
      <main>
        
        <Microcontrollers />
        <Testimonials />
        <IconsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    );
};

export default MicrocontrollersPage;