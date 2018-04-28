import React, { Component } from 'react';
import './styles/filter-card.css';

class FilterCard extends Component {
    handleChange = (event) => {
         if(event.target.checked) {
             this.props.addToFilter(this.props.data.id);
         } else {
             this.props.removeFromFilter(this.props.data.id);
         }
    }

    setActiveCatergory = () => {

        this.props.setActiveCatergory(this.props.data.id);
    }

    render() {
        const data = this.props.data,
              logo = data.logo_path ? data.logo_path : data.image_path,
              className = `filter-card text-secondary ${this.props.isInFilterResults ? 'selected' : ''}`;
              
        return (
            <li className={className}> 

                
                {/* style={{display: this.props.competitionId === this.props.data.competition_id ? 'block' :  'none'}}       */}
                    <img
                        className="logo"
                        src={logo}
                        alt="" />
                    <span onClick={this.setActiveCatergory}>
                        <p className="name">{this.props.data.name}</p>
                        <p className="name">{this.props.data.title}</p>
                    </span>
                    <input type="checkbox" onChange={this.handleChange} />
            </li>
        )
    }
}

export default FilterCard;