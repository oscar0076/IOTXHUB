import React from 'react';
import {Link} from 'react-router-dom';
import style from './LogInPart.module.css';
const LogInPart = () => {
    return (
     <div className={style.Log}>
       <section className={style.Bloc}>
          <img src="/images/login/Capture.png" alt="Bloc" />
          <form action="login">
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" placeholder='Email' required />
            </div>
            <div>
                <label htmlFor="password"  >Password :</label>
                <input type="password"  required />
            </div>
            <div>
              
            <button type='submit'>login</button>
           
            </div>
          </form>
       </section>
          <div className={style.SignUpSection} >
            <p>Not a user yet ?</p>
            <br /> 
            <Link to="/SignUp">
            <button type='submit'>Sign up</button>
            </Link>
          </div>

        
    </div>
    );
};

export default LogInPart;