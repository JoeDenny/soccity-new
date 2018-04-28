import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';

class SourceList extends Component {

    addSource = (source) => {

        this.props.addToFilter('sources', source);        
    }

    removeSource = (source) => {

        this.props.removeFromFilter('sources', source);        
    }

    render() {
        let sources,
            isInFilterResults,
            isDisabled = this.props.filterResults.length >= 5 ? 'disabled' : '';

        if(this.props.sources) {

            
            sources = this.props.sources.map(source => {
                
                return (
                    <FilterCard
                        key={source.id}
                        data={source}
                        addToFilter={this.addSource}
                        removeFromFilter={this.removeSource}                        
                        isInFilterResults={isInFilterResults} />
                );
            });
        }    

        return (
            <div className={"list team-feed " + isDisabled}>
                <h4 className="list-title">Add Sources</h4>            
                <ul>
                    {sources}
                </ul>
            </div>
        )
    }
}

export default SourceList;