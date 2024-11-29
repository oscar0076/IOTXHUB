import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <footer>
        <div className={style.cc}>
        
          <img src="/images/icons/facebook-app-symbol.png" alt="facebook" />
          <img src="/images/icons/instagram.png" alt="instagram" width="15" />
          <img src="/images/icons/twitter.png" alt="X" width="15" />
          <img src="/images/icons/youtube.png" alt="youtube" width="15" />
          <div className={style.logo}>
            <img src="/images/logoo-removebg-preview1.png" alt="IOTIXHUB" height="30" />
            <p>IOTIXHUB</p>
          </div>
        </div>
      <div className={style.Copyright}>
        <p>Privacy & Policy Terms Condition</p>
        <p>Copyright Artifice © 2024. All rights reserved</p>
    </div>
    </footer>
  );
}

export default Footer;
