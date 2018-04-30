import React, { Component } from 'react';
import ResultCard from './ResultCard';
import './styles/filter-results.css';

class FilterResults extends Component {
    render() {
        let results;  
        
        if(this.props.results.length) {
            
            results = this.props.results.map((result, i) => {                        
                return (
                    <ResultCard key={i} result={result} />
                );
            });
        }    
        return (
            <div className="results-tab clearfix">
                <h5>Your keyword filters:</h5>
                {results}
            </div>
        )
    }
}

export default FilterResults;