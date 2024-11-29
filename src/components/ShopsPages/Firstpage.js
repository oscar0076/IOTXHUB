import React from 'react';
import style from './Firstpage.module.css'

const Firstpage = () => {
    return (
        <main>
        <img src="/images/explore.PNG" alt="explore" width="100%" />
    
    <section className={style.equiplist}>
      <p>What Are you looking for?</p>
      <div className={style.equipmentlist}>
    <div className={style.eqCard}>
      <a href="sensors.html">
        <img src="/images/sensors.jpg" alt="Course 1" width="100px" height="150px" />
        <div className={style.overlay}>
          <span className={style.eqName}>Sensors</span>
        </div>
      </a>
    </div>
    <div className={style.eqCard}>
      <a href="microcontroller.html">
        <img src="/images/microcontollerr.PNG" alt="Course 2" width="100px" height="150px" />
        <div className={style.overlay}>
          <span className={style.eqName}>Microcontrollers</span>
        </div>
      </a>
    </div>
    <div className={style.eqCard}>
      <a href="motors.html">
        <img src="/images/5c60bfb111b7c25f22e284a61d6345bb.jpg" alt="Course 2" width="100px" height="150px" />
        <div className={style.overlay}>
          <span class={style.eqName}>Motors</span>
        </div>
      </a>
    </div>
    <div className={style.eqCard}>
      <a href="accessories.html">
        <img src="/images/9bb9b160bcc9cfb5780f9ec83c0540f6.jpg" alt="Course 2" width="100px" height="150px" />
        <div className={style.overlay}>
          <span class={style.eqName}>Accessories</span>
        </div>
      </a>
    </div>
  </div>
  </section>
  </main>
    );
};

export default Firstpage;