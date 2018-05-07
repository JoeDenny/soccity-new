import React, { Component } from 'react';
import './styles/dropdown.css';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    setAutoRefresh(time) {
        this.props.setAutoRefresh(time);
        this.props.closeDropdown();
    }
    
    render() {
        let isOpen = this.props.isOpen ? 'open' : '',
            content;

        const disabledClass = this.props.user.stripe_id ? '' : 'disabled';

        if(this.props.type === 'auto-refresh') {
            content = (
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
            )
        } else {
            content = (
                <ul>
                    <li>
                        <label className="form-label">
                            Highlight keywords
                            <input type="checkbox" onChange={this.handleRadioChange} checked={this.state.active} />
                        </label>
                    </li>
                </ul>
            )
        }

        return (
            <div className={"dropdown " + isOpen}
                id="dropdown">
                <div className="menu card">
                    {content}
                </div>
            </div>
        );
    }
}

export default Dropdown;