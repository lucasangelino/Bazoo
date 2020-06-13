import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componentes
import Home from '../containers/Home.jsx';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/elogin' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route  component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App; 