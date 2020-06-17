import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';

import { loginRequest } from '../actions/index.js';

import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';


const Login = (props) => {

    const [loginForm, setLoginForm] = useState({
        email : ''
    });

    const handleChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.loginRequest(loginForm)
        props.history.push('/')
    }


    return (    
        <section className="login__section">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>

                <input className="login__input" type="text" placeholder="Correo" name='email' onChange={handleChange}/>
                <input className="login__input" type="password" placeholder="Contraseña" name='password' onChange={handleChange}/>

                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                    <label>
                    <input type="checkbox" name="" id="cbox1" value="checkbos" />Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
                </form>
                <section className="login__container--social-media">
                <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
                <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta 
                    <Link to='/register'>Regístrate</Link>
                </p>
            </section>
        </section>
    );
};

const mapDispatchToProps = {
    loginRequest
};

export default connect(null, mapDispatchToProps)(Login);