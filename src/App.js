import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import './App.css';

const getPath = (url) => `/${url}`;

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path={getPath(routes.HOME_PATH)} component={Home} />
            <Route exact={true} path={getPath(routes.DASHBOARD_PATH)} component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default App;
