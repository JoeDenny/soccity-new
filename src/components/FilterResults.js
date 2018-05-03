import React, { Component } from 'react';
import ResultCard from './ResultCard';
import './styles/filter-results.css';

class FilterResults extends Component {
    render() {
        let results = []
          
        if(this.props.choices.competitions) {
            results.push(<ResultCard key={1} result={this.props.choices.competitions} />);
        }
        if(this.props.choices.teams) {
            results.push(<ResultCard key={2} result={this.props.choices.teams} />);
        }
        if(this.props.choices.players) {
            results.push(<ResultCard key={3} result={this.props.choices.players} />);
        }
        if(this.props.choices.keywords) {
            results.push(<ResultCard key={4} result={this.props.choices.keywords} />);            
        }

        if(this.props.choices.sources) {
            results.push(<ResultCard key={5} result={this.props.choices.sources} />);            
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