import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest }  from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {

    const [newUserForm, setNewUSerForm] = useState({
        email: '',
        name: '',
        password: ''
    });

    const handleChange = e => {
        setNewUSerForm({
            ...newUserForm,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newUserForm);
        props.registerRequest(newUserForm);
        props.history.push('/')
    }

    return (
        <section className="register">
            <section className="register__container">
            <h2>Regístrate</h2> 
            <form className="register__container--form" onSubmit={handleSubmit}>
                <input 
                    className="register__input" 
                    name='name' type="text" 
                    placeholder="Nombre"
                    onClick={handleChange}
                />

                <input 
                    className="register__input" 
                    name='email' 
                    type="text" 
                    placeholder="Correo"
                    onClick={handleChange}
                />
                <input 
                    className="register__input" 
                    name='password' 
                    type="password" 
                    placeholder="Contraseña" 
                    onClick={handleChange}
                />

                <button 
                    className="button"
                >
                    Registrarme
                </button>


            </form>
            <Link to='/elogin'>Iniciar Sesion</Link>
            </section>
        </section>
    );
};

const mapDispatchToProps = {
    registerRequest
}

export default connect(null, mapDispatchToProps)(Register);