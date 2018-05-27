import React, { Component } from 'react';
import SettingsButton from './SettingsButton';
import icon from '../images/recently-viewed.svg';
import ReactTooltip from 'react-tooltip';

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
                <img src={icon} alt="" data-tip="Recently Viewed Articles"/>
                <ReactTooltip place="bottom" multiline={true} />
            </SettingsButton>
        );
    }
}

export default RecentlyViewedButton;