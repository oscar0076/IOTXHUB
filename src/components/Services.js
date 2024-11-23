import React from 'react';
import styles from './Services.module.css'
function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.services1}>
        <h2>Explore the best</h2>
        <h2>IoT and Robotics Services</h2>
        <br />
        <br />
        <p>Explore our expert-led IoT and robotics courses, designed to help you master the latest technologies and build innovative solutions.</p>
      </div>
      <div className={styles.servicecards}>
        <div className={styles.cardcard1}>Service 1</div>
        <div className={styles.cardcard2}>Service 2</div>
        <div className={styles.cardcard3}>Service 3</div>
        <div className={styles.cardcard4}>Service 4</div>
      </div>
      <button>Get started</button>
    </section>
  );
}

export default Services;
