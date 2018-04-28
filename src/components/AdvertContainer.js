import React, { Component } from 'react';
import './styles/advert-container.css';

class AdvertContainer extends Component {
    
    render() {
        if(this.props.user.stripe_id) {
            return false;
        } else {
            return (
                <div className="advert-container">
                    <h3>Advert goes here</h3>
                </div>
            );
        }
    }
}

export default AdvertContainer;