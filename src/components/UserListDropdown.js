import React, { Component } from 'react';
import './styles/activity.css';

class UserListDropdown extends Component {

    render() {

        let isOpen = this.props.isOpen ? 'open' : '',
            users;

        if(this.props.users) {
            users = this.props.users.map(user => {
                return (
                    <li>{user.name}</li>
                )
            })
        }
        

        return (
            <div className={"dropdown " + isOpen}
                id="dropdown">
                <div className="menu card">
                    <ul>
                       {users}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserListDropdown;