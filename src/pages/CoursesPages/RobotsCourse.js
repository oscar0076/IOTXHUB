import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import ContactSection from '../../components/ContactSection';
import IconsSection from '../../components/IconsSection';
import '../../stylehome.css';
import Robots from '../../components/CoursesComponenets/Robots';
const IOTCourse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Assurez-vous de comparer avec 'true'
    console.log("isLoggedIn:", isLoggedIn); // Vérifiez la valeur de isLoggedIn

    if (!isLoggedIn) {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
      console.log("User not logged in, redirecting to login...");
      navigate('/Login');
    }
  }, [navigate]); // Inclure uniquement `navigate` si nécessaire
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