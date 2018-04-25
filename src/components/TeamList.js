import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';

class TeamList extends Component {

    addTeam = (team) => {

        this.props.addToFilter('teams', team);        
    }

    removeTeam = (team) => {

        this.props.removeFromFilter('teams', team);        
    }

    render() {
        let teams,
            isInFilterResults;

        let isDisabled = this.props.filterResults.length >= 5 ? 'disabled' : '';
        
        if(this.props.teams) {
            teams = this.props.teams.map(team => {

                isInFilterResults = this.props.filterResults.includes(team) ? true : false;
                
                return (
                    <FilterCard
                        key={team.id}
                        data={team}
                        addToFilter={this.addTeam}
                        removeFromFilter={this.removeTeam}                        
                        isInFilterResults={isInFilterResults} />
                );
            });
        }    

        return (
            <div className={"list team-feed " + isDisabled}>
                <h4 className="list-title">Add teams</h4>            
                <ul>
                    {teams}
                </ul>
            </div>
        )
    }
}

export default TeamList;