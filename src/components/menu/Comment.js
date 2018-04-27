import React, { Component } from 'react';
import '../styles/comments.css';
import UserPhoto from '../UserPhoto';

class Comment extends Component {
    render() {
        const comment = this.props.comment;

        let article;

        if(this.props.article) {            
            article = (
                <div className="article">
                    <h5>{this.props.article.title}</h5>
                </div>
            );
        }
        

        return (
            <li className="comment card">
                <header>
                    <UserPhoto link="http://35.176.191.198/images/default_avatars/profile1.png"/>
                    <h4>{comment.user.name}</h4>
                    <h5 className="text-tiny">{comment.created_at_formated}</h5>
                </header>

                {article}

                <p>{comment.comment}</p>

                <p className="reply-text text-right">Reply</p>
            </li>
        )
    }
}

export default Comment;