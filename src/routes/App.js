import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Componentes
import Home from '../containers/Home.jsx';
import Login from '../containers/Login';

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/elogin' component={Login} />
    </BrowserRouter>
);

export default App; 