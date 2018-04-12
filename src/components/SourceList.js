import React, { Component } from 'react';
import SourceCard from './SourceCard';

class SourceList extends Component {
    render() {
        let sources;
        
        if(this.props.sources) {
            sources = this.props.sources.map(source => {                                
                return (
                    <SourceCard key={source.id} source={source} />
                );
            });
        }    

        return (
            <div className="source-feed list card">
                <ul>
                    {sources}
                </ul>
            </div>
        )
    }
}

export default SourceList;