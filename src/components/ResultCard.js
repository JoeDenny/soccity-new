import React, { Component } from 'react';
import './styles/filter-results.css';

class ResultCard extends Component {
    removeFilter = () => {
        console.log('removefilter');
        
    }

    render() {
        
        return ( 
            <div className="result-card card">
                <span>{this.props.result}</span>
            </div>
        )
    }
}

export default ResultCard;