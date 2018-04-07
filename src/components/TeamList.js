import React, { Component } from 'react';
import TeamCard from './TeamCard';
import '../containers/styles/add-dashboard.css';

class TeamList extends Component {
    render() {
        let teams;
        
        if(this.props.teams) {
            teams = this.props.teams.map(team => {

                return (
                    <TeamCard key={team.id} team={team} />
                );
            });
        }    

        return (
            <section className="team-feed col-md-6">
                <ul>
                    {teams}
                </ul>
            </section>
        )
    }
}

export default TeamList;