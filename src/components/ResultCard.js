import React, { Component } from 'react';
import './styles/filter-results.css';

class ResultCard extends Component {
    render() {
        
        // const logo = this.props.result.logo_path ? this.props.result.logo_path : this.props.result.image_path;

        return ( 
            <div className="result-card card">
                {/* <div className="logo" >
                    <img src={logo} alt="" />
                </div> */}
                <span>{this.props.result.name}</span>
            </div>
        )
    }
}

export default ResultCard;