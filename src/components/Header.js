import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';


function Header() {
  const [searchQuery, setSearchQuery] = useState(''); // État pour la recherche
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Vérifie si l'utilisateur est connecté
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Met à jour l'état avec la saisie utilisateur
  };
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Supprime l'état de connexion
    navigate('/LogIn'); // Redirige vers la page de connexion
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }
    navigate(`/search?query=${searchQuery}`);
  };
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <Link to="/Home">
          <img src="/images/logoo-removebg-preview1.png" alt="IOTIXHUB" height="30" />
          </Link>
          <p>IOTIXHUB</p>
        </div>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="Shops">Shop</a></li>
          <li><a href="Courses">Courses</a></li>
          
          <li><a href="Contact">Contact</a></li>
          {!isLoggedIn ? (
            <li><a href="LogIn">Login</a></li> // Bouton Login si non connecté
          ) : null}
        </ul>
        <div className={styles.searchBar}>
       
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
           
              <img src="/images/icons/search-interface-symbol.png" alt="search" height="15" width="15" />
              
            
        </div>
        {isLoggedIn && ( // L'icône du menu n'apparaît que si l'utilisateur est connecté
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p
              onClick={handleLogout}
              style={{

                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                padding: '4px 2px',
                
              }}
            >
              Logout
            </p>
            <div className="menu">
              <img src="/images/icons/user.png" alt="user" height="20" width="20" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

