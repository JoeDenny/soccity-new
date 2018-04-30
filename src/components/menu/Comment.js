import React, { Component } from 'react';
import '../styles/comments.css';
import UserPhoto from '../UserPhoto';
import AddComment from './AddComment';

class Comment extends Component {
    constructor() {
        super();

        this.state = {
            replyOpen: false
        }
    }

    toggleFollow = () => {

        this.props.toggleFollow(this.props.comment.user.id);
    }

    toggleNestedReply = () => {
        this.setState({
            replyOpen: !this.state.replyOpen
        })
    }

    sendReply = (comment) => {
        
        this.props.sendReply(comment, this.props.comment.id);
    }

    render() {
        const comment = this.props.comment;

        let article,
            isFollowingUser,
            replies = [];

        if(comment.replies) {
            replies = comment.replies.map(reply => {
                return (
                    <div key={reply.id} className="comment">

                        <UserPhoto link={reply.user.avatar_path} />

                        <div className="comment-content">
                            <h4>{comment.user.name}</h4>
                            <h5 className="time text-secondary">{comment.created_at_formated}</h5>

                            <p className="text-tiny">{comment.comment}</p>
                        </div>
                    </div>
                )
            });
        }

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

        let nestedReplyClass = this.state.replyOpen ? 'open' : '';

        return (
            <li className="comment">

                <UserPhoto link={comment.user.avatar_path} />

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

                    <p>{comment.comment}</p>

                    <div className="reply-container">
                        <span style={{display: this.state.replyOpen ? 'none' : 'inline' }} className="nested-reply" onClick={this.toggleNestedReply}>reply</span>


                        <span style={{display: this.state.replyOpen ? 'inline' : 'none' }}  className="nested-reply" onClick={this.toggleNestedReply}>X</span>

                        <span style={{display: replies.length ? 'inline' : 'none' }}>
                            <a className="reply-count" onClick={this.toggleNestedReply}>{replies.length} replies</a>

                            <div className={"nested-reply-container " + nestedReplyClass}>
                                {replies}

                                <AddComment
                                    user={this.props.user}
                                    onSubmit={this.sendReply} />
                            </div>
                        </span>
                    </div>
                </div>
            </li>
        )
    }
}

export default Comment;