import React, { Component } from 'react';
import './styles/share-section.css';

class ShareSection extends Component {
    onClick = () => {
        console.log('click');
        
    }

    render() {
        return (
            <div className="share-container">
                <button className="btn btn-secondary" onClick={this.onClick}>Share Article</button>
            </div>
        );
    }
}

export default ShareSection;