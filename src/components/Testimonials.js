import React from 'react';
import styles from './Testimonials.module.css';
function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What People Say about our</h2>
      <h2>Services and courses</h2>
      <div className={styles.testimonialcards}>
        <div className={styles.testimonial}>
          "Une expérience d'apprentissage enrichissante ! Les ressources sont complètes et les formateurs sont très compétents. Cette plateforme m'a aidé à progresser rapidement dans mes projets de robotique."
        </div>
        <div className= {styles.testimonial}>
          "Une plateforme exceptionnelle ! Les cours sont clairs et pratiques, et le support est toujours disponible pour répondre à mes questions. J'ai vraiment amélioré mes compétences en robotique et IoT grâce à cette plateforme."
        </div>
        <div className={styles.testimonial}>
          "Une plateforme exceptionnelle ! Les cours sont clairs et pratiques, et le support est toujours disponible pour répondre à mes questions. J'ai vraiment amélioré mes compétences en robotique et IoT grâce à cette plateforme."
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
