import React, { Component } from 'react';

class TwitterFilter extends Component {
    handleChange = (event) => {

        this.props.addSourceType(event.target.checked);        
   }

    render() {
        return (
            <div className="source-feed list">
                <h4 className="list-title">Would you like to include results from Twitter in your dashboard?</h4>                        
                <ul>
                    <li className="filter-card text-secondary">
                        <p className="name">Include Tweets</p>
                        <input type="checkbox" onChange={this.handleChange}/>
                    </li>
                    {/* <li className="filter-card text-secondary">
                        <p className="name">Include Image Tweets</p>
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Include Video Tweets</p>
                        <input type="checkbox" />
                    </li> */}

                </ul>
            </div>
        )
    }
}

export default TwitterFilter;