import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseSection from '../components/WhychooseSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import IconsSection from '../components/IconsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import Group57Image from '../backgroundimage/Group57.png';
import d3 from '../backgroundimage/d3.jpg';
import futuristic5gwirelessnetworkairobothandtapwifiicon from '../backgroundimage/futuristic5gwirelessnetworkairobothandtapwifiicon.jpg'
import electronics from '../backgroundimage/electronics.jpg'
import '../stylehome.css';

const Home = () => {
    return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <Services />
        <Testimonials />
        <IconsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    );
};

export default Home;