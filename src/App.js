import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import Home from './containers/Home';
import './App.css';

const getPath = (url) => `/${url}`;

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path={getPath(routes.HOME_PATH)} component={Home} />
        </Switch>
    </BrowserRouter>
);

export default App;
