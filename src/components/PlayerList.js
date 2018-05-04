import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';

class PlayerList extends Component {

    addPlayer = (player) => {

        this.props.addToFilter('players', player);        
    }

    removePlayer = (player) => {

        this.props.removeFromFilter('players', player);        
    }

    setActiveId = () => {

        return null;
    }

    backToCompetitions = () => {

        this.props.setActiveCategory('competitions');
    }

    backToTeams = () => {

        this.props.setActiveCategory('teams');
    }

    render() {
        let players;

        if(this.props.players) {

            if(this.props.teamId) {

                players = this.props.players.reduce((result, player) => {
                    
                        if(player.team_id === this.props.teamId) {
            
                            result.push(<FilterCard
                                key={player.id}
                                data={player}
                                setActiveId={this.setActiveId}                        
                                addToFilter={this.addPlayer}
                                removeFromFilter={this.removePlayer} />);
                        }
                        return result;           
                    }, []); 
            } else {

                players = this.props.players.map(player => {

                    return (
                        <FilterCard
                            key={player.id}
                            data={player}
                            setActiveId={this.setActiveId}                        
                            addToFilter={this.addPlayer}
                            removeFromFilter={this.removePlayer} />
                    )
                });
            }
        }    
        
        return (
            <div className="relative">
                <div className="list player-list">                         
                    <ul>
                        {players}
                    </ul>
                </div>
                <div className="arrow-icon left" onClick={() => this.backToTeams()}>
                    <div className="arrow"></div>
                </div>

                <p className="breadcrumbs"><span onClick={this.backToCompetitions}>Competitions</span> &#62; <span onClick={this.backToTeams}>Teams</span> &#62; <span className="active">Players</span></p>
            </div>
        )
    }
}

export default PlayerList;