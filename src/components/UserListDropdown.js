import React, { Component } from 'react';
import './styles/comments.css';

class UserListDropdown extends Component {

    tagUser(user) {
        console.log('tag');
        
        this.props.tagUser(user);
    }

    render() {

        let isOpen = this.props.isOpen ? 'open' : '',
            users;

        if(this.props.users) {
            
            users = this.props.users.map(user => {
                return (
                    <li key={user.id} onClick={ () => this.tagUser(user) }>{user.name}</li>
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