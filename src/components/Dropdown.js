import React, { Component } from 'react';
import './styles/dropdown.css';

class Dropdown extends Component {
    // componentDidMount() {
    //     document.addEventListener('click', this.handleClickOutsideDropdown);
    // }
    
    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClickOutsideDropdown);
    // }

    // handleClickOutsideDropdown = (event) => {
    //     const dropdown = document.querySelector('#dropdown');
        
    //     if (this.props.isOpen && dropdown && !dropdown.contains(event.target)) {
    //       this.props.closeDropdown();
    //     }
    // }

    setAutoRefresh(time) {
        this.props.setAutoRefresh(time);
        this.props.closeDropdown();
    }
    
    render() {
        let isOpen = this.props.isOpen ? 'open' : '';

        const disabledClass = this.props.user.stripe_id ? '' : 'disabled';

        return (
            <div className={"dropdown " + isOpen}
                id="dropdown">
                <div className="menu card">
                    <ul>
                        <li className={disabledClass}
                            onClick={() => this.setAutoRefresh(10000)}>10 sec</li>

                        <li className={disabledClass}
                            onClick={() => this.setAutoRefresh(30000)}>30 sec</li>

                        <li style={{backgroundColor: this.props.autoRefreshRate === 60000 ? '#6CAA25' : 'initial'}}
                            onClick={() => this.setAutoRefresh(60000)}>1 min</li>

                        <li style={{backgroundColor: this.props.autoRefreshRate === 120000 ? '#6CAA25' : 'initial'}}             onClick={() => this.setAutoRefresh(120000)}>2 min</li>

                        <li style={{backgroundColor: this.props.autoRefreshRate === 300000 ? '#6CAA25' : 'initial'}}
                            onClick={() => this.setAutoRefresh(300000)}>5 min</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Dropdown;