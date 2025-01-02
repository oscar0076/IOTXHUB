import React from 'react';
import styles from './IconsSection.module.css'

function IconsSection() {
  return (
    <section className={styles.icons}>
      <div className={styles.icon}>
        <img src="/images/icons/partners.png" alt="partners" width="40" height="40" />
        <div>
          <p>200 +</p>
          <p>Trusted Partner</p>
        </div>
      </div>
      
      <div className={styles.icon}>
        <img src="/images/icons/crowdofusers.png" alt="Users" width="40" height="40" />
        <div>
          <p>100k +</p>
          <p>Worldwide Users</p>
        </div>
      </div>
      
      <div className={styles.icon}>
        <img src="/images/icons/quality.png" alt="quality" width="40" height="40" />
        <div>
          <p>10 +</p>
          <p>Years Of Experience</p>
        </div>
      </div>
      
      <div className={styles.icon}>
        <img src="/images/icons/trophy.png" alt="trophy" width="40" height="40" />
        <div>
          <p>24 +</p>
          <p>Products Award</p>
        </div>
      </div>
    </section>
  );
}

export default IconsSection;
