import React, { Component } from 'react';
import DashboardItem from './DashboardItem';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class ManageDashboards extends Component {

    deleteDashboard = (id) => {        
        this.props.deleteDashboard(id);
    }

    render() {
        let dashboards,
            noDashboardsClass;

        if(this.props.dashboards) {
            
            noDashboardsClass = `no-dashboards-message ${this.props.dashboards.length ? 'hide' : ''}`;

            dashboards = this.props.dashboards.map((dashboard, index) => {
                                
                return (
                    <DashboardItem key={index} dashboard={dashboard} deleteDashboard={this.deleteDashboard}/>
                );
            });
        }
    
        return (
            <div className="dashboards-section">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <h3>Manage Your Dashboards</h3>
                    </div>
                    <div className="col-xs-12 col-md-8">
                    
                       {dashboards}

                        <div className={noDashboardsClass}>
                            <p>You haven't created any dashboards yet!</p>
                        </div>

                        <div className="text-center new-dashboard-link">
                            <Link to={routes.ADD_DASHBOARD_PATH}>Create a dashboard.</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageDashboards;