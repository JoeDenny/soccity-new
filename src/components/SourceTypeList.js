import React, { Component } from 'react';

class SourceTypeList extends Component {

    handleChange = (event) => {

        const source = event.target.name;
        
        if(event.target.checked) {
            this.props.addToFilter('sources', source);        
        } else {
            this.props.removeFromFilter('sources', source);
        }
   }

    render() {

        console.log('sources', this.props.sources);
        

        return (
            <div className="source-feed list">
                <h4 className="list-title">Choose which publication tiers you would like: </h4>                        
                <ul>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 1</p>
                        <input type="checkbox" name={1} onChange={this.handleChange}/>
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 2</p>                      
                        <input type="checkbox" name={2} onChange={this.handleChange}/>
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 3</p>
                        <input type="checkbox" name={3} onChange={this.handleChange}/>
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 4</p>
                        <input type="checkbox" name={4} onChange={this.handleChange}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SourceTypeList;