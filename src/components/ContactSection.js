import React from 'react';
import {Link} from 'react-router-dom';
import styles from './ContactSection.module.css'

function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact1}>
        <div className={styles.unlock}>
          <h2>Unlock the Potential of IoT and Robotics with</h2>
          <h2>IOTIXHUB</h2>
        </div>
        <br />
        <p>
          Don't miss this chance to level up your skills in robotics and IoT—join our platform today for expert-led courses, resources, and a community ready to support your journey!
        </p>
        <Link to="/Contact">
        <button>Contact Us</button>
        </Link>
      </div>
      <img src="/images/1-removebg-preview.png" alt="IOTIXHUB Logo" height="500px" />
    </section>
  );
}

export default ContactSection;
