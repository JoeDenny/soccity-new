import React, { Component } from 'react';
import './styles/news-feed.css';

class TeamCard extends Component {
    render() {
        
        return (
            <li>   
                <div className="team-card">
                    {/* <img src={this.props.team.logo_path} alt="team logo" /> */}
                    {this.props.team.name}
                </div>

            </li>
        )
    }
}

export default TeamCard;