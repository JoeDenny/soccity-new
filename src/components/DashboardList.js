import React, { Component } from 'react';
import Logo from './logo.png';
import './styles/dashboard-list.css';

class DashboardList extends Component {

    setActiveDashboard = (dashboard) => {
        
        this.props.setActiveDashboard(dashboard)
    }

    render() {
        let dashboards,
            logoPath;     

        if(this.props.dashboards) {
            dashboards = this.props.dashboards.map((dashboard, i) => {                                
                
                logoPath = dashboard.teams[0] ? dashboard.teams[0].logo_path : Logo;
                
                return (
                    <section onClick={() => this.setActiveDashboard(dashboard) } key={i} className="dashboard-list-item">
                        <div className="img-container">
                            <img src={logoPath} alt="" />
                        </div>
                    </section>
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