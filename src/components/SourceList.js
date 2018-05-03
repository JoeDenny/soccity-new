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

    setActiveId() {
        return null;
    }

    render() {
        let sources;

        if(this.props.sources) {

            sources = this.props.sources.map(source => {
                
                return (
                    <FilterCard
                        key={source.id}
                        data={source}
                        setActiveId={this.setActiveId}
                        addToFilter={this.addSource}
                        removeFromFilter={this.removeSource} />
                );
            });
        }    

        return (
            <div className={"list team-feed"}>         
                <ul>
                    {sources}
                </ul>
            </div>
        )
    }
}

export default SourceList;