import React, { Component } from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Header extends Component {
    render() {
        return (
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
        )
    }
}

export default Header;