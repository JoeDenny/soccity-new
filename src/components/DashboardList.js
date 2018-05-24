import React, { Component } from 'react';
import Logo from './logo.png';
import './styles/dashboard-list.css';

class DashboardList extends Component {

    setActiveDashboard = (dashboard) => {
        
        this.props.setActiveDashboard(dashboard)
    }

    render() {
        let dashboards,
            logoPath,
            isActive;     

        if(this.props.dashboards) {
            dashboards = this.props.dashboards.map((dashboard, i) => {    
                
                isActive = dashboard.id === this.props.activeDashboard.id ? 'active' : '';
                
                if(dashboard.teams[0]) {
                    logoPath = dashboard.teams[0].logo_path;
                } else if(dashboard.players[0]) {
                    logoPath = dashboard.players[0].image_path;
                } else if(dashboard.sources[0]) {
                    logoPath = dashboard.sources[0].logo_path;
                } else {
                    logoPath = Logo;
                }
                
                return (
                    <div onClick={() => this.setActiveDashboard(dashboard) } key={i} className={"dashboard-list-item " + isActive}>
                        <img src={logoPath} alt="" />
                    </div>
                );
            });
        }    

        return (
                <div>
                {dashboards}
                </div>
        )
    }
}

export default DashboardList;