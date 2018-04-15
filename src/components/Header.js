import React, { Component } from 'react';
import Logo from './logo.png';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Header extends Component {
    
    render() {
        const className = `app-header navbar-sticky-top ${this.props.fixedHeader ? 'fixed-header' : ''}`;
        
        return (
            <header className={className}>
                <div className="container">
                    <img
                        className="app-logo"
                        src={Logo}
                        alt="soccity" />
                    <nav className="pull-right">
                        <div className="auth-btns">
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
                        </div>
                        <div className="dashboard-btn">
                            <ul>
                                <li>
                                    <button className="btn btn-primary">
                                        <Link to={routes.DASHBOARD_PATH}>Dashboard</Link>
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;