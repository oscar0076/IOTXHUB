import React from 'react';
import style from './Firstpage.module.css';
import { Link } from 'react-router-dom';

const Firstpage = () => {
    return (
        <main>
            <img src="/images/explore.PNG" alt="explore" width="100%" />
        
            <section className={style.equiplist}>
                <p>What Are you looking for?</p>
                <div className={style.equipmentlist}>
                    <div className={style.eqCard}>
                        <Link to="/SensorsPage">
                            <img src="/images/sensors.jpg" alt="Sensors" width="100px" height="150px" />
                            <div className={style.overlay}>
                                <span className={style.eqName}>Sensors</span>
                            </div>
                        </Link>
                    </div>

                    <div className={style.eqCard}>
                        <Link to="/MicrocontrollersPage">
                            <img src="/images/microcontollerr.PNG" alt="Microcontrollers" width="100px" height="150px" />
                            <div className={style.overlay}>
                                <span className={style.eqName}>Microcontrollers</span>
                            </div>
                        </Link>
                    </div>

                    <div className={style.eqCard}>
                        <Link to="/MotorsPage">   
                            <img src="/images/5c60bfb111b7c25f22e284a61d6345bb.jpg" alt="Motors" width="100px" height="150px" />
                            <div className={style.overlay}>
                                <span className={style.eqName}>Motors</span>
                            </div>
                        </Link>
                    </div>

                    <div className={style.eqCard}>
                        <a href="accessories.html">
                            <img src="/images/9bb9b160bcc9cfb5780f9ec83c0540f6.jpg" alt="Accessories" width="100px" height="150px" />
                            <div className={style.overlay}>
                                <span className={style.eqName}>Accessories</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Firstpage;
