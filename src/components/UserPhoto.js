import React from 'react';
import './styles/user-photo.css';

const UserPhoto = (props) => {
    const { size, link } = props;
    const style = {
        width: `${size}px`,
        height: `${size}px`
    };

    return (
        <div 
            className="user-photo"
            style={style}
        >
            <img src={link} alt="user icon"/>
        </div>
    );
};

export default UserPhoto;