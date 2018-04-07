import React, { Component } from 'react';
import './styles/news-feed.css';

class SourceCard extends Component {
    render() {
        
        return (
            <li>   
                <div className="source-card">
                    {/* <img src={this.props.team.logo_path} alt="team logo" /> */}
                    {this.props.source.title}
                </div>

            </li>
        )
    }
}

export default SourceCard;