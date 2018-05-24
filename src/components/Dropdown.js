import React, { Component } from 'react';
import './styles/dropdown.css';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            active: false,
            keyword: '',
            color: true,
            bold: false,
            underline: false
        }
    }

    handleChange = (event) => {
        const name = event.target.name;

        this.setState({
            ...this.state,
            [name]: event.target.value
        });        
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name;        

        this.setState({
            ...this.state,
            [name]: event.target.checked
        });        
    }

    setAutoRefresh(time) {
        this.props.setAutoRefresh(time);
        this.props.closeDropdown();
    }

    handleSubmit = () => {
        let stylesArray = [];

        if(this.state.color) {
            stylesArray.push('color');
        }
        if(this.state.bold) {
            stylesArray.push('bold');
        }
        if(this.state.underline) {
            stylesArray.push('underline');
        }

        let keywordsConfig = {
            keywords: this.state.keyword.split(" "),
            styles: stylesArray
        }

        this.props.highlightKeywords(keywordsConfig);
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
                <div>
                    <h4>Keyword Highlight</h4>
                    <ul>
                        <li>
                            <label className="input-wrapper">
                                Keyword:
                                <input className="text-input" type="text" onChange={this.handleChange} name="keyword" placeholder="e.g. transfer"/>
                            </label>
                        </li>
                        <li>
                            <label className="form-label">
                                <span>Highlight:</span>
                                <input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.color} name="color"/>
                            </label>
                        </li>
                        <li>
                            <label className="form-label">
                                <span>Bold:</span>
                                <input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.bold} name="bold"/>
                            </label>
                        </li>
                        <li>
                            <label className="form-label">
                                <span>Underline:</span>
                                <input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.underline} name="underline"/>
                            </label>
                        </li>
                    </ul>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Go!</button>
                </div>
            )
        }

        return (
            <div className={"dropdown " + isOpen + " " + this.props.type}
                id="dropdown">
                <div className="menu card">
                    {content}
                </div>
            </div>
        );
    }
}

export default Dropdown;