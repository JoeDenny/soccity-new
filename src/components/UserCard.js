import React from 'react';
import UserPhoto from './UserPhoto';
import './styles/user-card.css';

const UserCard = (props) => {

    return (
        <div className="user-card">
            <UserPhoto link={props.user.avatar_path} size={40}/>
            <h4>{props.user.name}</h4>
        </div>
    );
};

export default UserCard;