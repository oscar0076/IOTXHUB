import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import IconsSection from '../components/IconsSection';
import ContactSection from '../components/ContactSection';
import SignUpPart from '../components/SignUPLogIN/SignUpPart';
import '../stylehome.css';


const SignUp = () => {
    return (
        <div className="App">
        <Header />
        <main>
        <SignUpPart/>
        <Testimonials />
        <IconsSection />
        <ContactSection />
        </main>
        <Footer />
      </div>
    );
};

export default SignUp;