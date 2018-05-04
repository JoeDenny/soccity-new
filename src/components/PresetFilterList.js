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

                {/* <h4 onClick={this.toggleList} className="list-title">Choose Preset Filter Options <i className="arrow down"></i></h4>    */}

                <div className="input-wrapper inline-input">
                    <div className="flex-container">
                        <div className="input-wrapper inline-input checkbox full-width">
                        <label className="form-label" onClick={this.toggleList}>
                            <span>Choose Preset Filter Options</span>
                            <i className="arrow down"></i>
                        </label>
                            <ul style={{height: this.state.showList ? 120 : 0 }}>
                                <li className="filter-card text-secondary">
                                    <label className="form-label">
                                        <span>Transfer News</span>
                                        <input type="checkbox" />
                                    </label>
                                </li>
                                <li className="filter-card text-secondary">
                                    <label className="form-label">
                                        <span>Injuries & Suspensions</span>
                                        <input type="checkbox" />
                                    </label>
                                </li>
                                <li className="filter-card text-secondary">
                                    <label className="form-label">
                                        <span>Loan player news</span>
                                        <input type="checkbox" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PresetFilterList;