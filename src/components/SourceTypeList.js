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
            <div className="source-feed source-type">
                <div className="input-wrapper inline-input">

                    <div className="flex-container">
                        <div className="input-wrapper inline-input checkbox">
                            <input type="checkbox" onChange={this.handleChange} />
                            <label className="form-label">Tier 1</label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <input type="checkbox" onChange={this.handleChange} />
                            <label className="form-label">Tier 2</label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <input type="checkbox" onChange={this.handleChange} />
                            <label className="form-label">Tier 3</label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <input type="checkbox" onChange={this.handleChange} />
                            <label className="form-label">Tier 4</label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <input type="checkbox" onChange={this.handleChange} />
                            <label className="form-label">Tier 5</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SourceTypeList;