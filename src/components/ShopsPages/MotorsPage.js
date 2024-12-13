import React from 'react';
import Header from '../../components/Header';
import Testimonials from '../../components/Testimonials';
import IconsSection from '../../components/IconsSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Motors from '../ShopComponents/Motors';
import '../../stylehome.css';
const MotorsPage = () => {
    return (
        <div className="App">
      <Header />
      <main>
        
        <Motors />
        <Testimonials />
        <IconsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    );
};

export default MotorsPage;