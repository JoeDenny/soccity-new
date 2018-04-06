import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

store.subscribe(() => {
    const state = store.getState();   
    
    localStorage.setItem('store', JSON.stringify(state));
});

const getPath = (url) => `/${url}`;

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path={getPath(routes.HOME_PATH)} component={Home} />
                <Route exact={true} path={getPath(routes.LOGIN_PATH)} component={Login} />
                <Route exact={true} path={getPath(routes.DASHBOARD_PATH)} component={Dashboard} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default App;
