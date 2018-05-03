import React, { Component } from 'react';
import './styles/filter-results.css';

class ResultCard extends Component {
    removeFilter = () => {
        console.log('removefilter');
        
    }

    render() {
        let result;
        

        if(this.props.result.name) {
            result = this.props.result.name;
        } else if(this.props.result.title) {
            result = this.props.result.title;
        } else if(typeof this.props.result === 'string'){
            result = this.props.result;
        }        
        
        return ( 
            <div className="result-card card">
                <span>{result}</span>
            </div>
        )
    }
}

export default ResultCard;