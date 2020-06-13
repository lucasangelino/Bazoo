import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';

const Register = () => {
    return (
        <section className="register">
            <section className="register__container">
            <h2>Regístrate</h2> 
            <form className="register__container--form">
                <input className="register__input" type="text" placeholder="Nombre" />
                <input className="register__input" type="text" placeholder="Correo" />
                <input className="register__input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <Link to='/elogin'>Iniciar Sesion</Link>
            </section>
        </section>
    );
};

export default Register;