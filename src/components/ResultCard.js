import React, { Component } from 'react';
import './styles/filter-results.css';

class ResultCard extends Component {
    removeFilter = () => {
        this.props.removeFilter();
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

                 <button type="button" className="close-icon"  onClick={this.removeFilter}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                </button>
            </div>
        )
    }
}

export default ResultCard;