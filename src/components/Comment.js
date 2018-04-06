import React, { Component } from 'react';
import './styles/header.css';

class Comment extends Component {
    render() {
        return (
            <li>{this.props.comment.comment}</li>
        )
    }
}

export default Comment;