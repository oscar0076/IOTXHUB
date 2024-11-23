import React from 'react';
import styles from './WhychooseSection.module.css'
function WhyChooseSection() {
  return (
    <section className={styles.whychoose}>
      <h2>Why Choose</h2>
      <h2>IOTXHUB?</h2>
      <div className={styles.features}>
        <div className={styles.feature}>
          <img src="/images/icons/robot.PNG" alt="small-robot" width="25" />
          <p>Best IoT and ROBOTICS equipment are available here</p>
        </div>
        <div className={styles.feature}>
          <img src="/images/icons/online-learning (1).png" alt="online-learning" width="25" />
          <p>The most effective online courses tailored to your needs</p>
        </div>
        <div className={styles.feature}>
          <img src="/images/icons/trustworthiness (1).png" alt="trustworthiness" width="25" />
          <p>The most qualified trainers from around the world</p>
        </div>
        <div className={styles.feature}>
          <img src="/images/icons/crowd-of-users.png" alt="crowd-of-users" width="25" />
          <p>The ultimate platform for all IOT and ROBOTICS clubs</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;

