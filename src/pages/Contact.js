import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPart1 from '../components/ContactPart1';
import ContactPart2 from '../components/ContactPart2';
import '../stylehome.css';
const Contact = () => {
    return (
        <div className="App">
        <Header />
        <main>
        <ContactPart1 />
        <ContactPart2 />
        
        
        
        </main>
        <Footer />
        </div>
    );
};

export default Contact;