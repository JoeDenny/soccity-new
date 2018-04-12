import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';

class TeamList extends Component {

    addTeam = (team) => {

        this.props.addToFilter(team);        
    }

    render() {
        let teams,
            isInFilterResults;
        
        if(this.props.teams) {
            teams = this.props.teams.map(team => {

                isInFilterResults = this.props.filterResults.includes(team) ? true : false;
                
                return (
                    <FilterCard
                        key={team.id}
                        data={team}
                        addToFilter={this.addTeam}
                        isInFilterResults={isInFilterResults} />
                );
            });
        }    

        return (
            <div className="list team-feed">
                <h4 className="list-title">Add teams</h4>            
                <ul>
                    {teams}
                </ul>
            </div>
        )
    }
}

export default TeamList;