import React from 'react';
import {Link} from 'react-router-dom';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero1}>
        <h1>Welcome to the </h1>
        <h1>Robotics World</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Your gateway to cutting-edge robotics equipment and comprehensive training workshops led by industry experts.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={styles.hero2}>
          <Link to="/LogIn">
          <button>Login</button>
          </Link>
          <div className={styles.mitin}>
            <p>200 +</p>
            <p>Trusted Companies</p>
          </div>
        </div>
      </div>
      <div className={styles.robot1}>
        <img src='/images/ESET_Warns_Users_on_Card_Fraud__Top_Tips_for_Protecting_Individual_Accounts_and_Identity_-_Core_Sector_Communique-removebg-preview.png' alt="robot" height="690" width="620" />
      </div>
    </section>
  );
}

export default HeroSection;
