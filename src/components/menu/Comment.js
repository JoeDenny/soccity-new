import React, { Component } from 'react';
import '../styles/comments.css';
import UserPhoto from '../UserPhoto';

class Comment extends Component {

    toggleFollow = () => {

        this.props.toggleFollow(this.props.comment.user.id);
    }

    render() {
        const comment = this.props.comment;

        let article;

        if(this.props.article) {            
            article = (
                <div className="article">
                    <h2>{this.props.article.title}</h2>
                </div>
            );
        }
        

        return (
            <li className="comment">

                <UserPhoto link="http://35.176.191.198/images/default_avatars/profile1.png"/>

                <div className="comment-content">
                    <h4>{comment.user.name}</h4>
                    {/* <div onClick={this.toggleFollow}>Follow</div> */}
                    <h5 className="time text-secondary">{comment.created_at_formated}</h5>

                    {article}

                    <p className="text-tiny">{comment.comment}</p>
                </div>
            </li>
        )
    }
}

export default Comment;