import React, { Component } from 'react';
import './styles/comments.css';
import UserPhoto from './UserPhoto';

class Comment extends Component {
    render() {
        const comment = this.props.comment;

        return (
            <li className="comment card">
                <header>
                    <UserPhoto link="http://35.176.191.198/images/default_avatars/profile1.png"/>
                    <h4>{comment.user.name}</h4>
                    <h5 className="text-tiny">{comment.created_at_formated}</h5>
                </header>
                <p>{comment.comment}</p>
            </li>
        )
    }
}

export default Comment;