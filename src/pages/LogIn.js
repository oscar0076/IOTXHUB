import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import IconsSection from '../components/IconsSection';
import ContactSection from '../components/ContactSection';
import LogInPart from '../components/SignUPLogIN/LogInPart';

import '../stylehome.css';

const logIn = () => {
    return (
        <div className="App">
        <Header />
        <main>
        <LogInPart />
        <Testimonials />
        <IconsSection />
        <ContactSection />
        </main>
        <Footer />
      </div>
      );
    }
export default logIn;