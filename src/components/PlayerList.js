import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';
import rightArrow from '../images/right-arrow.png';
import leftArrow from '../images/left-arrow.png';
import LoadingIcon from './LoadingIcon';

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
            players = this.props.players.map(player => {
                let isActive;

                if(this.props.filterResults) {
                    isActive = this.props.filterResults.includes(player);
                }
            
                return (
                    <FilterCard
                        key={player.id}
                        isActive={isActive}
                        data={player}
                        setActiveId={this.setActiveId}                        
                        addToFilter={this.addPlayer}
                        removeFromFilter={this.removePlayer} />
                )
            });
        }    
        
        return (
            <div className="relative">
                <div className="list player-list">                         
                    <LoadingIcon show={this.props.loading}/>
                    
                    <ul style={{ display: this.props.loading ? 'none' : 'block' }}>
                        {players}
                    </ul>
                </div>
                <div className="arrow-icon left" onClick={() => this.backToTeams()}>
                    <img src={leftArrow} alt="" />
                </div>
                <div className="arrow-icon right disabled" >
                    <img src={rightArrow} alt="" />
                </div>

                <p className="breadcrumbs"><span onClick={this.backToCompetitions}>Competitions</span> &#62; <span onClick={this.backToTeams}>Teams</span> &#62; <span className="active">Players</span></p>
            </div>
        )
    }
}

export default PlayerList;