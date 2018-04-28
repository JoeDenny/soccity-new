import React, { Component } from 'react';
import './styles/filter-card.css';

class FilterCard extends Component {
    handleChange = (event) => {
         if(event.target.checked) {
             this.props.addToFilter(this.props.data.id);
         } else {
             this.props.removeFromFilter(this.props.data);
         }
    }

    render() {
        const data = this.props.data,
              logo = data.logo_path ? data.logo_path : data.image_path,
              className = `filter-card text-secondary ${this.props.isInFilterResults ? 'selected' : ''}`;
              
        return (
            <li className={className}>   
                    <img
                        className="logo"
                        src={logo}
                        alt="" />
                    <p className="name">{this.props.data.name}</p>
                    <p className="name">{this.props.data.title}</p>
                    <input type="checkbox" onChange={this.handleChange} />
            </li>
        )
    }
}

export default FilterCard;