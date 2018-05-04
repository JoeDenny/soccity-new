import React, { Component } from 'react';

class CommonKeywords extends Component {
    
    render() {
        let keywords;

        if(this.props.commonKeywords) {
            keywords = this.props.commonKeywords.map(keyword => {

                return (
                    <span>{keyword}</span>
                )
            });
        }
        return (
            <div>{keywords}</div>
        )
    }
}

export default CommonKeywords;