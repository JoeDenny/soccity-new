import React, { Component } from 'react';
import ResultCard from './ResultCard';
import './styles/filter-results.css';

class FilterResults extends Component {
    constructor() {
        super();

        this.results = [];
    }
    componentWillReceiveProps(nextProps) {
        this.results = nextProps.results;   
    }
    render() {
        let results;  
        
        if(this.results.length) {
            results = this.results.map(result => {                
                return (
                    <ResultCard key={result.name} result={result} />
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