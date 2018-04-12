import React, { Component } from 'react';
import './styles/sidebar.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Logo from './logo.png';

class DashboardHeader extends Component {
    render() {
        return (
            <div className="dashboard-sidebar">    
                    <img
                        className="app-logo"
                        src={Logo}
                        alt="soccity" />

                    <Link to={routes.ADD_DASHBOARD_PATH}>
                        <button 
                        type="button" 
                        className="plus-icon" />
                    </Link>
            </div>
        )
    }
}

export default DashboardHeader;