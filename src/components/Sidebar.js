import React, { Component } from 'react';
import './styles/sidebar.css';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Logo from './logo.png';
import DashboardList from './DashboardList';

class Sidebar extends Component {
    setActiveDashboard = (dashboard) => {
        
        this.props.setActiveDashboard(dashboard);
    }

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

                    <DashboardList dashboards={this.props.dashboards} setActiveDashboard={this.setActiveDashboard}/>
            </div>
        )
    }
}

export default Sidebar;