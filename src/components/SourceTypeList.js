import React, { Component } from 'react';

class SourceTypeList extends Component {
    constructor() {
        super();

        this.state = {
            tier1: true,
            tier2: true,
            tier3: true,
            tier4: true,
            tier5: true
        }
    }

    handleChange = (event) => {

        const tier = event.target.name;

        this.setState({
            [tier]: event.target.checked
        })
        
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
                            <label className="form-label">
                                <input type="checkbox" name="tier1" />
                                Tier 1
                            </label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <label className="form-label">
                                <input type="checkbox" name="tier2" value={this.state.tier2} />
                                Tier 2
                            </label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <label className="form-label">
                                <input type="checkbox" name="tier3" value={this.state.tier3} />
                                Tier 3
                            </label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                        <label className="form-label">
                                <input type="checkbox" name="tier4" value={this.state.tier4} />
                                Tier 4
                            </label>
                        </div>
                        <div className="input-wrapper inline-input checkbox">
                            <label className="form-label">
                                <input type="checkbox" name="tier5" value={this.state.tier5} />
                                Tier 5
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SourceTypeList;