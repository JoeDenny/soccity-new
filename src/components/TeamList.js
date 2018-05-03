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

    setActiveTeamId = (id) => {

        this.props.setActiveTeamId(id)
    }

    backToCompetitions = () => {

        this.props.setActiveCategory('competitions');
    }

    render() {
        let teams;        

        if(this.props.teams) {

            teams = this.props.teams.reduce((result, team) => {
                    if(team.competition_id === this.props.competitionId) {
        
                        result.push(<FilterCard
                            key={team.id}
                            data={team}
                            setActiveId={this.setActiveTeamId}                      
                            addToFilter={this.addTeam}
                            removeFromFilter={this.removeTeam} />);
                    }
                    return result;           
                }, []);  
        }    

        return (
            <div className={"list team-feed"}>
                <p className="breadcrumbs"><span onClick={this.backToCompetitions}>Competitions</span> &#62; <span className="active">Teams</span></p>
                <ul>
                    {teams}
                </ul>
            </div>
        )
    }
}

export default TeamList;