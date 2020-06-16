import React from 'react';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar.js';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user } = props;
  console.log(props)
  const hasUSer = Object.keys(user).length > 0;
  console.log(hasUSer)
  console.log(user)

  return(
    <header className="header">
      <Link to='/'>
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">

          {
            hasUSer ? 
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='user icon' />
          }

          
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/elogin">Iniciar Sesion</a></li>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return { user : state.user}
}

export default connect(mapStateToProps, null)(Header);
