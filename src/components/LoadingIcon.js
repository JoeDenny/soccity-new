import React, { Component } from 'react';

class LoadingIcon extends Component {
    render() {
        return (
            <div style={{ display: this.props.show ? 'block' : 'none' }}>
                <div className="lds-dual-ring"></div>
            </div>
        );
    }
}

export default LoadingIcon;