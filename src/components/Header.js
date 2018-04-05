import React, { Component } from 'react';

class Header extends Component {
    render() {
        const user = this.props.user;
        return (
            <header>
                Hello {user.name} 
            </header>
        )
    }
}

export default Header;