import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LogInPart.module.css';

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
                // Login réussi, rediriger vers la page Home
                navigate('/home');
            } else {
                // Afficher le message d'erreur
                setError(data.error || 'Une erreur est survenue.');
            }
        } catch (err) {
            setError('Impossible de se connecter. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div className={style.Log}>
            <section className={style.Bloc}>
                <img src="/images/login/Capture.png" alt="Bloc" />
                <form onSubmit={handleSubmit}>
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
                    {error && <p className={style.Error}>{error}</p>}
                </form>
            </section>
            <div className={style.SignUpSection}>
                <p>Not a user yet?</p>
                <br />
                <button onClick={() => navigate('/signup')}>Sign up</button>
            </div>
        </div>
    );
};

export default LogInPart;
