import React, { Component } from 'react';

class PresetFilterList extends Component {
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
            <div className={"preset-filter-dropdown " + this.state.showList}>

                <h4 onClick={this.toggleList} className="list-title">Choose Preset Filter Options <i className="arrow down"></i></h4>                        
                <ul style={{height: this.state.showList ? 120 : 0 }}>
                    <li className="filter-card text-secondary">
                        <p className="name">Transfer News</p>
                        <input type="checkbox"/>
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Injuries & Suspensions</p>                      
                        <input type="checkbox" />
                    </li>
                    <li className="filter-card text-secondary">
                        <p className="name">Loan player news</p>
                        <input type="checkbox" />
                    </li>
                </ul>
            </div>
        )
    }
}

export default PresetFilterList;