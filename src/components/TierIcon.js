import React, { Component } from 'react';
import './styles/tier-icon.css';

class TierIcon extends Component {
    render() {
        return (
            <div className="tier-icon card">
                <span>Tier {this.props.tier}</span>
            </div>
        );
    }
}

export default TierIcon;