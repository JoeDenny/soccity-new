import React, { Component } from 'react';
import SourceCard from './SourceCard';

class SourceList extends Component {
    render() {
        let sources;
        
        if(this.props.sources) {
            sources = this.props.sources.map(source => {
                console.log('srouce', source);
                
                return (
                    <SourceCard key={source.id} source={source} />
                );
            });
        }    

        return (
            <section className="source-feed col-md-6">
                <ul>
                    {sources}
                </ul>
            </section>
        )
    }
}

export default SourceList;