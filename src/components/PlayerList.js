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

    render() {
        let players,
            isInFilterResults;
        
        if(this.props.players) {
            players = this.props.players.map(player => {

                isInFilterResults = this.props.filterResults.includes(player) ? true : false;
                
                return (
                    <FilterCard
                        key={player.id}
                        data={player}
                        addToFilter={this.addPlayer}
                        removeFromFilter={this.removePlayer}                        
                        isInFilterResults={isInFilterResults}/>
                );
            });
        }    

        return (
            <div className="list player-feed">
                <h4 className="list-title">Add players</h4>            
                <ul>
                    {players}
                </ul>
            </div>
        )
    }
}

export default PlayerList;