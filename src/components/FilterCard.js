import React, { Component } from 'react';
import './styles/filter-card.css';
import addCircle from '../images/add_circle_outline.svg';
import removeCircle from '../images/remove_circle.svg';

class FilterCard extends Component {
    addToFilter = (event) => {

        this.props.addToFilter(this.props.data);
    }

    removeFromFilter = () => {
        this.props.removeFromFilter(this.props.data);
    }

    setActiveId = () => {

        this.props.setActiveId(this.props.data.id);
    }

    render() {
        const data = this.props.data,
              logo = data.logo_path ? data.logo_path : data.image_path;        
              
        let icon = !this.props.isActive ? 
            <div onClick={this.addToFilter} className="add-icon">
                <img src={addCircle} alt="" />
            </div>
            :
            <div onClick={this.removeFromFilter} className="add-icon">
                <img src={removeCircle} alt="" />
            </div>
              
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
                    
                   {icon}
            </li>
        )
    }
}

export default FilterCard;