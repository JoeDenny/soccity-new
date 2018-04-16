import React, { Component } from 'react';

class DashboardItem extends Component {

    deleteDashboard = () => {        
        this.props.deleteDashboard(this.props.dashboard.id);
    }

    render() {
        const dashboard = this.props.dashboard;
            

        return (
            <div className="dashboard-item card">
                <h3>{dashboard.name}</h3>
                <button className="pull-right" onClick={this.deleteDashboard}>Delete</button>
                <p>Keywords: {dashboard.keywords}</p>
            </div>
        )
    }
}

export default DashboardItem;