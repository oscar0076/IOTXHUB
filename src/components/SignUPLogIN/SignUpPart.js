import React from 'react';
import { useState } from 'react';

import style from './SignUppart.module.css'
const SignUpPart = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Réinitialiser les messages
        const { name, lastName, email, password } = formData;

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, lastName, email, password }),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage(result.message); // Afficher le message de succès
            } else {
                const error = await response.json();
                setMessage(error.error); // Afficher le message d'erreur
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription :', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className={style.Sign}>
            <section className={style.Bloc}>
            <img src="/images/login/Capture.png" alt="Bloc" />
            <form className={style.Signform} onSubmit={handleSubmit}>
                <div className={style.NameContainer}>  
                    <div>
                        <label htmlFor="text">Name :</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange}  />
                    </div>
                    <div>
                        <label htmlFor="text">Last Name :</label>
                        <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />  
                    </div>
                </div>
            <div className={style.SecondPart}>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}  />
            </div>
            <div>
                <label htmlFor="password"  >Password :</label>
                <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            </div>
            </div>
            <div>
              <button type='submit'>Create Account</button>
              </div>
            </form>

            {message && <p>{message}</p>} {/* Afficher le message */}
            </section>




        </div>


    );
};

export default SignUpPart;