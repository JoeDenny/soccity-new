import React, { Component } from 'react';
import './styles/sidebar.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class DashboardHeader extends Component {
    render() {
        return (
            <div className="dashboard-sidebar">    
                    <Link to={routes.ADD_DASHBOARD_PATH}>
                        <button 
                        type="button" 
                        className="open-filter-icon" />
                    </Link>
                <h4>Add Dashboard</h4>
            </div>
        )
    }
}

export default DashboardHeader;