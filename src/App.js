import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Register from './containers/Register';
import Login from './containers/Login';
import SocialLogin from './containers/SocialLogin';
import MyStoreCheckout from './containers/checkout/MyStoreCheckout';
import Profile from './containers/Profile';
import Preferences from './containers/Preferences';
import AddDashboard from './containers/AddDashboard';
// import NewsArticle from './components/NewsArticle';
import './App.css';
import { Provider } from 'react-redux';
import {StripeProvider} from 'react-stripe-elements';
import store from './store';

store.subscribe(() => {
    const state = store.getState();

    const storageItem = {
        token: state.token,
        user: state.user
    }
    
    localStorage.setItem('store', JSON.stringify(storageItem));
});

const getPath = (url) => `/${url}`;

export const App = () => (
    <StripeProvider apiKey="pk_test_goh4u8Tl7fYss57rErkw1Ej3">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path={getPath(routes.HOME_PATH)} component={Home} />
                    <Route exact={true} path={getPath(routes.REGISTER_PATH)} component={Register} />
                    <Route exact={true} path={getPath(routes.BILLING_PATH)} component={MyStoreCheckout} />
                    <Route exact={true} path={getPath(routes.LOGIN_PATH)} component={Login} />
                    <Route exact={true} path={getPath(routes.DASHBOARD_PATH)} component={Dashboard} />
                    <Route exact={true} path={getPath(routes.PROFILE_PATH)} component={Profile} />
                    <Route exact={true} path={getPath(routes.PREFERENCES_PATH)} component={Preferences} />
                    <Route exact={true} path={getPath(routes.ADD_DASHBOARD_PATH)} component={AddDashboard} />
                    <Route path={getPath(routes.SOCIAL_LOGIN_PATH)} component={SocialLogin} />
                    {/* <Route exact={true} path="/linktoarticle/:url" component={NewsArticle} /> */}

                    <Route component={Home}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </StripeProvider>
);

export default App;
