import React from 'react';
import './styles/comments.css';

const UserPhoto = (props) => {
    const { size, link } = props;
    const style = {
        width: `${size}px`,
        height: `${size}px`
    };

    console.log('props', props);
    
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