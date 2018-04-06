import React, { Component } from 'react';
import './styles/header.css';
import Comment from './Comment';

class ComentsContainer extends Component {

    render() {
        let comments;
        
        if(this.props.comments) {
            comments = this.props.comments.map(comment => {
                
                return (
                    <Comment key={comment.id} comment={comment} />
                );
            });
        }    

        return (
            <ul>
                {comments}
            </ul>
        )
    }
}

export default ComentsContainer;