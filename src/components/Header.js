import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <img src="/images/logoo-removebg-preview1.png" alt="IOTIXHUB" height="30" />
          <p>IOTIXHUB</p>
        </div>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="Shops">Shop</a></li>
          <li><a href="Courses">Courses</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="Contact">Contact</a></li>
          <li><a href="LogIn">Login</a></li>
        </ul>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
          <img src="/images/icons/search-interface-symbol.png" alt="search" height="15" width="15" />
        </div>
        <div className="menu">
          <img src="/images/icons/menu.png" alt="menu" height="20" width="20" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
