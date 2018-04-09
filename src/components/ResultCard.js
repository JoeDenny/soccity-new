import React, { Component } from 'react';

class ResultCard extends Component {
    render() {
        return (
            <li>   
                <div className="team-card">
                    <img src={this.props.result.logo_path} alt="team logo" />
                    {this.props.result.name}
                </div>

            </li>
        )
    }
}

export default ResultCard;