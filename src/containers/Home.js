import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Home extends Component {

    render() {
        return (
            <section>
                <header className="app-header navbar-sticky-top">
                    <div className="container">
                        <h1 className="app-name">Soccity</h1>
                        <nav className="pull-right">
                            <ul>
                                <li>
                                    <Link to={routes.LOGIN_PATH}>Login</Link>
                                </li>
                                <li>
                                    <button className="btn btn-primary">
                                        <Link to={routes.REGISTER_PATH}>Register</Link>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="container">
                    <div className="hero text-center">
                        <h2>Reliable News. Quality Stories.</h2>
                        <h4>Soccity is an ad-free publication featuring quality soccer stories and reliable soccer news.</h4>
                        <button className="btn btn-primary">
                            <Link to={routes.DASHBOARD_PATH}>Get Started</Link>
                        </button>
                    </div>
                </div>

                <div className="container dashboard-preview">
                    <Link to={routes.DASHBOARD_PATH}>
                        {/* <Dashboard /> */}
                    </Link>
                </div>

            </section>
        );
    }
}

export default Home;