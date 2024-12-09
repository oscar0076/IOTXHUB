import React from 'react';
import styles from './ContactPart1.module.css';
const ContactPart = () => {
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
          
        </div>
        <img src="/images/1-removebg-preview.png" alt="IOTIXHUB Logo" height="500px" />
      </section>
    );
};

export default ContactPart;