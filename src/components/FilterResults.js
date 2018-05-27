import React, { Component } from 'react';
import ResultCard from './ResultCard';
import './styles/filter-results.css';

class FilterResults extends Component {
    removeFromFilter = (type) => {

        this.props.removeFromFilter(type);
    }

    removeSource = (item) => {

        this.props.removeSource(item);
    }

    render() {
        let results = [];        
          
        if(this.props.choices.competitions) {
            results.push(<ResultCard key={1} result={this.props.choices.competitions} removeFromFilter={() => this.removeFromFilter('competitions')}/>);
        }
        if(this.props.choices.teams) {
            results.push(<ResultCard key={2} result={this.props.choices.teams} removeFromFilter={() => this.removeFromFilter('teams')}/>);
        }
        if(this.props.choices.players) {
            results.push(<ResultCard key={3} result={this.props.choices.players}  removeFromFilter={() => this.removeFromFilter('players')}/>);
        }
        if(this.props.choices.keywords) {
            results.push(<ResultCard key={4} result={this.props.choices.keywords} removeFromFilter={() => this.removeFromFilter('keywords')} />);            
        }

        if(this.props.choices.sources) {
            for(let i = 0; i < this.props.choices.sources.length; i++) {

                let result = this.props.choices.sources[i];                
                
                results.push(<ResultCard key={i+5} result={result} removeFromFilter={() => this.removeSource(result)} />);            
            }
        }
            
        return (
            <div className="results-tab clearfix">
                {results}
                {/* {sources} */}
            </div>
        )
    }
}

export default FilterResults;