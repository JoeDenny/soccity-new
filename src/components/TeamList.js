import React, { Component } from 'react';
import TeamCard from './TeamCard';
import '../containers/styles/add-dashboard.css';

class TeamList extends Component {
    constructor() {
        super();

        this.addTeam = this.addTeam.bind(this);
    }

    addTeam(team) {
        this.props.addTeamToFilter(team);        
    }

    render() {
        let teams;
        
        if(this.props.teams) {
            teams = this.props.teams.map(team => {

                return (
                    <TeamCard key={team.id} team={team} addTeam={this.addTeam}/>
                );
            });
        }    

        return (
            <section className="col-xs-12 col-md-6">
                <div className="team-feed">
                    <ul>
                        {teams}
                    </ul>
                </div>
            </section>
        )
    }
}

export default TeamList;