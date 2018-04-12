import React, { Component } from 'react';

class TwitterFilter extends Component {
    render() {
        return (
            <div className="source-feed list">
                <h4 className="list-title">Choose which publication tiers you would like: </h4>                        
                <ul>
                    <li className="filter-card text-secondary">
                        <p className="name">Include Tweets</p>
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Include Image Tweets</p>
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Include Video Tweets</p>
                        <input type="checkbox" />
                    </li>

                </ul>
            </div>
        )
    }
}

export default TwitterFilter;