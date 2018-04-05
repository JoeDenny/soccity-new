import React, { Component } from 'react';

class SourceItem extends Component {
    render() {
        
        return (
            <li>
                {this.props.source.news}
            </li>
        )
    }
}

export default SourceItem;