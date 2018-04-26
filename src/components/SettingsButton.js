import React, { Component } from 'react';
import './styles/settings-button.css';

class SettingsButton extends Component {
    onClick = () => {
        this.props.onClick();
    }
    render() {
        const className = `settings-button ${this.props.isActive ? 'active' : ''}`;
        return (
            <button type="button" className={className} onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default SettingsButton;