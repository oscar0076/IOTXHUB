import React from 'react';
import styles from './ContactPart2.module.css'
const ContactPart2 = () => {
    return (
        <section className={styles.ContactPart2}>
            
                <div className={styles.info}>
                    <img src="/images/icons/mapsandflags.png" alt="maps" /> 
                    <p>Address</p>
                    <p>Ghazela City, Ariana</p>
                    <img src="/images/icons/phonecall.png" alt="phone" />
                    <p>Phone Number</p>
                    <p>+216 28 420 755</p>
                    <img src="/images/icons/email1.png" alt="email" />
                    <p>E-mail</p>
                    <p>iotixhub@gmail.com</p>
                </div>
            <div>
                    

                <form action="Message" className={styles.Message}>
                <h3>Send a message </h3>
                    <div>
                        <input type="text" placeholder='Name' required />
                    </div>
                    <div>
                        <input type="email" placeholder='Email'  required />
                    </div>
                    <div>
                    <textarea placeholder="Message" rows="5" cols="30" style={{ resize: "none" }} required></textarea>
                    </div>
                    <button type='submit'>Send</button>
                </form>
                </div>
            
                <br />
                <div>
                    <h2>Our social media</h2>
                    <img src="/images/icons/facebook-app-symbol.png" alt="facebook" width="30" />
                    <img src="/images/icons/instagram.png" alt="instagram" width="30" />
                    <img src="/images/icons/twitter.png" alt="X" width="30" />
                    <img src="/images/icons/youtube.png" alt="youtube" width="30" />
                </div>
           
        </section>
    );
};

export default ContactPart2;