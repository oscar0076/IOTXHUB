import React from 'react';
import Header from '../components/Header';
import '../stylehome.css';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import IconsSection from '../components/IconsSection';
import ContactSection from '../components/ContactSection';
import Firstpage from '../components/ShopsPages/Firstpage';

const Shops = () => {
    return (
        <div className="App">
          <Header />
          <main>
          
          <Firstpage />
          <Testimonials />
          <IconsSection />
          <ContactSection />
          </main>
          <Footer />
        </div>
        );
};

export default Shops;