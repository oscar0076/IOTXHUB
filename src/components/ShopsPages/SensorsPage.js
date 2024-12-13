import React from 'react';
import Header from '../../components/Header';
import Testimonials from '../../components/Testimonials';
import IconsSection from '../../components/IconsSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Sensors from '../../components/ShopComponents/Sensors'
import '../../stylehome.css';
const SensorsPage = () => {
    return (
        <div className="App">
      <Header />
      <main>
        
        <Sensors />
        <Testimonials />
        <IconsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    );
};

export default SensorsPage;