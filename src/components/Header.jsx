import React from 'react';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar.js';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user } = props;
  const hasUSer = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  }

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
          {
            hasUSer ? 
            <li><a href="/">{user.name}</a></li> : null
          }

          {
            hasUSer ? 
            <li><a href="/elogin" onClick={handleLogout}>Cerrar Sesion</a></li> :
            null
          }
          
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return { user : state.user}
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
