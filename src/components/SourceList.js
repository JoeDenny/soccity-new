import React, { Component } from 'react';
import SourceItem from './SourceItem';

class SourceList extends Component {
    render() {
        let sourceList;
        if(this.props.sources) {            
            sourceList = this.props.sources.map(source => {
                            
                return (
                    <SourceItem key={source.news} source={source} />
                );
            })
        }

        return (
            <ul>
                {sourceList}
            </ul>
        );
    }
}

export default SourceList;