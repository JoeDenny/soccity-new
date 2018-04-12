import React, { Component } from 'react';

class SourceList extends Component {
    render() {
        // let sources;
        
        // if(this.props.sources) {
        //     sources = this.props.sources.map(source => {                                
        //         return (
        //             <SourceCard key={source.id} source={source} />
        //         );
        //     });
        // }    

        return (
            <div className="source-feed list">
                <h4 className="list-title">Choose which publication tiers you would like: </h4>                        
                <ul>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 1</p>
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 2</p>
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 3</p>
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 4</p>
                        <input type="checkbox" />
                    </li>
                </ul>
            </div>
        )
    }
}

export default SourceList;