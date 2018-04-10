import React, { Component } from 'react';
import SettingsButton from './SettingsButton';

class BookmarkButton extends Component {
    render() {
        return (
            <SettingsButton
                onClick={this.props.onClick}
                isActive={this.props.isActive}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.577 402.577"><path d="M393.146 14.279c-3.713-5.333-8.713-9.233-14.989-11.707A31.606 31.606 0 0 0 365.592.004V0H66.378c-4.377 0-8.562.857-12.56 2.568-6.28 2.472-11.278 6.377-14.989 11.707-3.71 5.33-5.568 11.228-5.568 17.701v368.019c0 6.475 1.858 12.371 5.568 17.706 3.711 5.329 8.709 9.233 14.989 11.704a31.577 31.577 0 0 0 12.56 2.566c8.949 0 16.844-3.142 23.698-9.418l125.91-121.062 125.91 121.065c6.663 6.081 14.562 9.127 23.695 9.127 4.76 0 8.948-.756 12.565-2.279 6.276-2.471 11.276-6.375 14.989-11.711 3.71-5.328 5.564-11.225 5.564-17.699V31.98c.001-6.473-1.857-12.371-5.563-17.701z"/></svg>
            </SettingsButton>
        );
    }
}

export default BookmarkButton;