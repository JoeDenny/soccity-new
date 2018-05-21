import React, { Component } from 'react';
import SettingsButton from './SettingsButton';
import icon from '../images/bookmark.svg';

class BookmarkButton extends Component {
    onClick = () => {
        this.props.setActiveMenuItem('bookmarks');
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

export default BookmarkButton;