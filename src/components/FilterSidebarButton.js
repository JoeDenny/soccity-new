import React, { Component } from 'react';
import SettingsButton from './SettingsButton';
import icon from '../images/edit-filters.svg';

class FilterSidebarButton extends Component {
    onClick = () => {
        this.props.setActiveMenuItem('filter');
    }
    
    render() {
        return (
            <SettingsButton
                onClick={this.onClick}
                isActive={this.props.isActive}
            >
                <img src={icon} alt="" data-tip="Dashboard Filter"/>
                
            </SettingsButton>
        );
    }
}

export default FilterSidebarButton;