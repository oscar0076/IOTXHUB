import React from 'react';
import style from './SignUppart.module.css'
const SignUpPart = () => {
    return (
        <div className={style.Sign}>
            <section className={style.Bloc}>
            <img src="/images/login/Capture.png" alt="Bloc" />
            <form action="SignUp">
                <div>
                    <label htmlFor="text">Name :</label>
                    <input type="text"  required/>
                </div>
                <div>
                <label htmlFor="text">Last Name :</label>
                <input type="text"  required/>  
                </div>
                <div>
                <label htmlFor="email">Email : </label>
                <input type="email" placeholder='Email' required />
            </div>
            <div>
                <label htmlFor="password"  >Password :</label>
                <input type="password"  required />
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