import React, { Component } from 'react';
import FilterCard from './FilterCard';
import '../containers/styles/add-dashboard.css';

class SourceList extends Component {

    addSource = (source) => {

        this.props.addToFilter(source);        
    }

    removeSource = (source) => {

        this.props.removeFromFilter(source);        
    }

    setActiveId() {
        return null;
    }

    render() {
        let sources;

        if(this.props.sources) {
            
            sources = this.props.sources.map(source => {

                

                let isActive;

                if(this.props.filterResults) {
                    isActive = this.props.filterResults.includes(source);
                }
                
                return (
                    <FilterCard
                        key={source.id}
                        isActive={isActive}
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