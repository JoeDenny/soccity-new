import React, { Component } from 'react';
import SettingsButton from './SettingsButton';
import icon from '../images/latest-comments.svg';

class LatestCommentsButton extends Component {
    onClick = () => {
        this.props.setActiveMenuItem('latestComments');
    }
    render() {
        return (
            <SettingsButton
                onClick={this.onClick}
                isActive={this.props.isActive}
            >
                <img src={icon} alt="" data-tip="Latest Comments"/>
            </SettingsButton>
        );
    }
}

export default LatestCommentsButton;