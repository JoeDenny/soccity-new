import React, { Component } from 'react';
import UserPhoto from '../UserPhoto';
import '../styles/comments.css';
import { connect } from 'react-redux';
import UserListDropdown from '../UserListDropdown';
import { findUsers } from '../../actions';


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

        let comment = event.currentTarget.value;

        if(comment.includes('@')) {
            let username = comment.split('@')[1]; 
            if(username.length) {
                this.props.findUsers(username);
            }       
        }
        
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
        
        const placeholder = 'Write a response...';

        return (
            <form className="add-comment" onSubmit={this.onSubmit}>
                <div className="add-comment__photo">
                    <UserPhoto
                        link=""
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
                    <UserListDropdown isOpen={true} users={this.props.foundUsers} />
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => ({
    foundUsers: state.foundUsers
});

const mapDispatchToProps = (dispatch) => ({
    findUsers: (username) => dispatch(findUsers(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);