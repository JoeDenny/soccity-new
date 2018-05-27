import React, { Component } from 'react';
import './styles/tier-icon.css';

class TierIcon extends Component {
    render() {
        const className = `tier-icon tier-${this.props.tier}`;

        return (
            <h5 className={className}>reputation level {this.props.tier}</h5>
        );
    }
}

export default TierIcon;