import React, { Component } from 'react';
import './styles/dashboard-list.css';

class DashboardList extends Component {

    setActiveDashboard = (dashboard) => {
        
        this.props.setActiveDashboard(dashboard)
    }

    render() {
        let dashboards;     

        if(this.props.dashboards) {
            dashboards = this.props.dashboards.map((dashboard, i) => {                                
                return (
                    <section onClick={() => this.setActiveDashboard(dashboard) } key={i} className="dashboard-list-item">
                        <div className="img-container">
                            {/* <img src={dashboard.sources[0].source.logo_path} alt="" /> */}
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