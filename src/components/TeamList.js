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

            if(this.props.competitionId) {

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
            } else {

                teams = this.props.teams.map(team => {
                    return (
                        <FilterCard
                                key={team.id}
                                data={team}
                                setActiveId={this.setActiveTeamId}                      
                                addToFilter={this.addTeam}
                                removeFromFilter={this.removeTeam} />
                    )
                })
            }

        }    

        return (
            <div className="relative">
                <div className={"list team-list"}>
                    <ul>
                        {teams}
                    </ul>
                </div>

                <p className="breadcrumbs"><span onClick={this.backToCompetitions}>Competitions</span> &#62; <span className="active">Teams</span></p>
                <div className="arrow-icon left" onClick={() => this.backToCompetitions()}>
                    <div className="arrow"></div>
                </div>
                <div className="arrow-icon right" onClick={() => this.setActiveTeamId(undefined)}>
                    <div className="arrow"></div>
                </div>
            </div>
        )
    }
}

export default TeamList;