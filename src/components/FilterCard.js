import React, { Component } from 'react';
import './styles/filter-card.css';

class FilterCard extends Component {
    handleClick = () => {
        this.props.addToFilter(this.props.data);
    }

    render() {
        const data = this.props.data,
              logo = data.logo_path ? data.logo_path : data.image_path,
              className = `filter-card text-secondary ${this.props.isInFilterResults ? 'selected' : ''}`
              
        return (
            <li className={className}
                onClick={this.handleClick}>   
                    <img
                        className="logo"
                        src={logo}
                        alt="" />
                    <p className="name">{this.props.data.name}</p>
                    <input type="checkbox" />
            </li>
        )
    }
}

export default FilterCard;