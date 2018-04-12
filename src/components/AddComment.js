import React, { Component } from 'react';
import UserPhoto from './UserPhoto';
import './styles/comments.css';


class AddComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: undefined,
            commentLength: 0,
            textareaHeight: 27
        };
    }
    
    onCommentChange = (event) => {
        const commentLength = event.currentTarget.value.length;
        
        this.setState({
            comment: event.currentTarget.value,
            commentLength: commentLength,
            textareaHeight: commentLength >= 40 ? 95 : 27
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.comment);

        this.setState({
            comment: '',
            commentLength: 0,
            textareaHeight: 27
        });
    }

    render() {
        // const { avatar_path } = this.props.user || {
        //     avatar_path: undefined
        // };
        
        const placeholder = 'Reply...';

        return (
            <form className="add-comment" onSubmit={this.onSubmit}>
                <div className="add-comment__photo">
                    <UserPhoto
                        link="http://35.176.191.198/images/default_avatars/profile1.png"
                    />
                </div>
                <div className="add-comment__input">
                    <textarea
                        value={this.state.comment}
                        placeholder={placeholder}
                        onChange={this.onCommentChange}
                    />
                    <button 
                        type="submit" 
                        className="add-comment__button"
                    >
                        Send
                    </button>
                </div>
            </form>
        )
    }
}

export default AddComment;