import React, { Component } from 'react';

class SourceTypeList extends Component {
    constructor() {
        super();

        this.state = {
            showList: false
        }
    }

    toggleList = () => {

        this.setState({
            showList: !this.state.showList
        })
    }

    handleChange = (event) => {

        // const source = event.target.name;
        
        // if(event.target.checked) {
        //     this.props.addToFilter('sources', source);        
        // } else {
        //     this.props.removeFromFilter('sources', source);
        // }
   }

    render() {


        return (
            <div className="source-feed source-type list">
                <h4 onClick={this.toggleList} className="list-title">Choose which publication tiers you would like: </h4>                        
                <ul style={{height: this.state.showList ? 200 : 0 }}>
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
                    <li className="filter-card text-secondary">
                        <p className="name">Tier 5</p>
                        <input type="checkbox" name={5} onChange={this.handleChange}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SourceTypeList;