import React, { Component } from 'react';
import ResultCard from './ResultCard';
import './styles/header.css';

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
                    <ResultCard key={result.id} result={result} />
                );
            });
        }    
        return (
            <div>
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

export default FilterResults;