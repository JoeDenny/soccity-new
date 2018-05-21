import React, { Component } from 'react';
import SettingsButton from './SettingsButton';
import icon from '../images/recently-viewed.svg';

class RecentlyViewedButton extends Component {
    onClick = () => {
        this.props.setActiveMenuItem('recentlyViewed');
    }

    render() {
        return (
            <SettingsButton
                onClick={this.onClick}
                isActive={this.props.isActive}
            >
                <img src={icon} alt=""/>

            </SettingsButton>
        );
    }
}

export default RecentlyViewedButton;