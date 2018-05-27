import React, { Component } from 'react';
import './styles/filter-card.css';

class FilterCard extends Component {
    handleClick = (event) => {

        this.props.addToFilter(this.props.data);
    }

    setActiveId = () => {

        this.props.setActiveId(this.props.data.id);
    }

    render() {
        const data = this.props.data,
              logo = data.logo_path ? data.logo_path : data.image_path;              
              
        return (
            <li className={"filter-card text-secondary " + this.props.isActive}> 

                    <div className="clickable clearfix" onClick={this.setActiveId}>
                        <img
                            className="logo"
                            src={logo}
                            alt="" />
                        <p className="name">{this.props.data.name}</p>
                        <p className="name">{this.props.data.title}</p>
                    </div>
                    
                    <div onClick={this.handleClick} className="plus-icon"></div>
            </li>
        )
    }
}

export default FilterCard;