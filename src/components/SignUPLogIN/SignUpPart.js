import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import auth from '../../Firebase';
import style from './SignUppart.module.css'
const SignUpPart = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          
          setSuccessMessage("Account created successfully!");
          // Vous pouvez ajouter d'autres étapes comme enregistrer le nom complet dans la base de données
        } catch (error) {
          
          setErrorMessage(error.message);
        }
      };
    return (
        <div className={style.Sign}>
            <section className={style.Bloc}>
            <img src="/images/login/Capture.png" alt="Bloc" />
            <form onSubmit={handleSubmit}>
                <div className={style.NameContainer}>  
                    <div>
                        <label htmlFor="text">Name :</label>
                        <input type="text"  required name='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="text">Last Name :</label>
                        <input type="text"  required name='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />  
                    </div>
                </div>
            <div className={style.SecondPart}>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password"  >Password :</label>
                <input type="password"  required  value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            </div>
            <div>
              <button type='submit'>Create Account</button>
              </div>
            </form>


            </section>




        </div>


    );
};

export default SignUpPart;