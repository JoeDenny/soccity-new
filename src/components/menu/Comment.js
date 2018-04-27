import React, { Component } from 'react';
import '../styles/comments.css';
import UserPhoto from '../UserPhoto';

class Comment extends Component {

    toggleFollow = () => {

        this.props.toggleFollow(this.props.comment.user.id);
    }

    render() {
        const comment = this.props.comment;

        let article,
            isFollowingUser;

        if(this.props.article) {            
            article = (
                <div className="article">
                    <h2>{this.props.article.title}</h2>
                </div>
            );
        }
        
        if(this.props.followings) {
            const followings = this.props.followings;
            for(let i = 0; i < followings.length; i++) {
                
                if (followings[i].id === comment.user.id) {
                    isFollowingUser = true;
                }
            }
        }

        return (
            <li className="comment">

                <UserPhoto link="http://35.176.191.198/images/default_avatars/profile1.png"/>

                <div className="comment-content">
                    <h4>{comment.user.name}</h4>
                    <h5 className="time text-secondary">{comment.created_at_formated}</h5>
                    
                    <span style={{display : comment.user.id === this.props.user.id ? 'none' : 'inline'}}>

                        <span style={{display : isFollowingUser ? 'none' : 'inline'}}>
                            <div className="btn btn-follow" onClick={this.toggleFollow}>Follow</div>
                        </span>

                        <span style={{display : isFollowingUser ? 'inline' : 'none'}}>
                            <div className="btn btn-follow active" onClick={this.toggleFollow}>Unfollow</div>
                        </span>

                    </span>

                    {article}

                    <p className="text-tiny">{comment.comment}</p>
                </div>
            </li>
        )
    }
}

export default Comment;