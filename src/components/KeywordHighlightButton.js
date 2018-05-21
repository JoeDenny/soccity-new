import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { setAutoRefresh } from '../actions';
import icon from '../images/keyword-highlight.svg';

class KeywordHighlightButton extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false
        }
    }

    setAutoRefresh = (time) => {        
        this.props.setAutoRefresh(time);
    }

    openDropdown = () => {
        this.setState({
            dropdownOpen: true
        })
    }

    closeDropdown = () => {
        this.setState({
            dropdownOpen: false
        })
    }

    render() {

        return (
            <div className="settings-button"
                 onMouseEnter={this.openDropdown}
                 onMouseLeave={this.closeDropdown} >
                
                <img src={icon} alt=""/>
                
                <Dropdown  
                    isOpen={this.state.dropdownOpen}
                    type="keyword-highlight"
                    user={this.props.user}
                    autoRefreshRate={this.props.autoRefreshRate}
                    setAutoRefresh={this.setAutoRefresh}
                    closeDropdown={this.closeDropdown} />

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    autoRefreshRate: state.autoRefreshRate
});

const mapDispatchToProps = (dispatch) => ({
    setAutoRefresh: (time) => dispatch(setAutoRefresh(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(KeywordHighlightButton);