import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LogInPart.module.css';

const LogInPart = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('isLoggedIn', 'true');
                
                navigate('/home');
            } else {
                // Afficher le message d'erreur
                setError(data.error ||'An error occurred.');
            }
        } catch (err) {
            setError('Unable to connect. Please try again later.');
        }
    };

    return (
        <div className={styles.Log}>
            <section className={styles.Bloc}>
                <img src="/images/login/Capture.png" alt="Bloc" />
                <form className={styles.Logform} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password :</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    {error && <p className={styles.Error}>{error}</p>}
                </form>
            </section>
            <div className={styles.SignUpSection}>
                <p>Not a user yet?</p>
                <br />
                <button onClick={() => navigate('/signup')}>Sign up</button>
            </div>
        </div>
    );
};

export default LogInPart;
