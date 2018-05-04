import React, { Component } from 'react';

class DashboardItem extends Component {

    deleteDashboard = () => {        
        this.props.deleteDashboard(this.props.dashboard.id);
    }

    render() {
        const dashboard = this.props.dashboard;

        let sources,
            teams;

        if(dashboard.sources.length) {
            sources = dashboard.sources.map(source => {

                return <span key={source.id}>{source.title} </span>;
            })
        }

        if(dashboard.teams.length) {
            teams = dashboard.teams.map(team => {

                return <span key={team.id}>{team.name} </span>;
            })
        }
            
        return (
            <div className="dashboard-item box">
                <h3>{dashboard.name}</h3>
                <span style={{display: dashboard.sources.length ? 'inline' : 'none'}}>                
                    <h5>Sources</h5>
                    <p className="text-tiny">{sources}</p>
                </span>
                <span style={{display: dashboard.teams.length ? 'inline' : 'none'}}>
                    <h5>Teams</h5>
                    <p className="text-tiny">{teams}</p>
                </span>
                <button onClick={this.deleteDashboard}>Delete</button>
            </div>
        )
    }
}

export default DashboardItem;