import React from 'react';
import styles from '../components/CoursesCards.module.css'

const CoursesCards = () => {
    return (
      <div className={styles.container}>
        <div className={styles.CoursesCards}>
       
          <div className={styles.coursecard1}><a><p>Autonomous<br/>Robotics</p><span className={styles.hovertext}>Start Now</span></a></div>
          <div className={styles.coursecard2}><p>Advanced IOT</p><span className={styles.hovertext}>Start Now</span></div>
          <div className={styles.coursecard3}><p>Electronics</p><span className={styles.hovertext}>Start Now</span></div>
          <div className={styles.coursecard4}><p>Wireless Communication</p><span className={styles.hovertext}>Start Now</span></div>
          <div className={styles.coursecard5}><p>Programming</p><span className={styles.hovertext}>Start Now</span></div>
          
      </div>
      </div>
    );
};

export default CoursesCards;