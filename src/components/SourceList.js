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
            <section className="col-xs-12 col-md-6">
                <div className="source-feed ">
                    <ul>
                        {sources}
                    </ul>
                </div>
            </section>
        )
    }
}

export default SourceList;