import React, { Component } from 'react';

class LoadingIcon extends Component {
    render() {
        return (
            <div className="loading-icon" style={{ display: this.props.show ? 'flex' : 'none' }}>
                <div className="lds-dual-ring"></div>
            </div>
        );
    }
}

export default LoadingIcon;