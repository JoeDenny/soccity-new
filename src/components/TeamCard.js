import React, { Component } from 'react';
import './styles/news-feed.css';

class TeamCard extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addTeam(this.props.team);
    }

    render() {
        return (
            <li>   
                <div className="team-card" onClick={this.handleClick}>
                    {/* <img src={this.props.team.logo_path} alt="team logo" /> */}
                    {this.props.team.name}
                </div>

            </li>
        )
    }
}

export default TeamCard;