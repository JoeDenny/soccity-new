import React, { Component } from 'react';
import UserPhoto from '../UserPhoto';
import '../styles/comments.css';
import { connect } from 'react-redux';
import UserListDropdown from '../UserListDropdown';
import { findUsers, stopSearchingForUsers } from '../../actions';


class AddComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tag: '',
            comment: undefined,
            commentLength: 0,
            textareaHeight: 27
        };
    }

    tagUser = (user) => {

        let comment = this.state.comment.split('@')[0];

        // let newComment = this.state.comment.replace(username, user.name);

        let newComment = comment + '@' + user.name;

        this.setState({
            ...this.state,
            comment: newComment
        });
        this.props.stopSearchingForUsers();
    }
    
    onCommentChange = (event) => {
        const commentLength = event.currentTarget.value.length;

        let comment = event.currentTarget.value;
        
        if(comment.includes('@')) {
            let splitComment = comment.split('@');

            if(splitComment[1].split(' ').length === 1) {
                
                let username = splitComment[1]; 
                if(username.length) {
                    this.props.findUsers(username);
                }       
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
                    <UserListDropdown isOpen={this.props.searchingForUsers} users={this.props.foundUsers} tagUser={this.tagUser} />
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => ({
    foundUsers: state.foundUsers,
    searchingForUsers: state.searchingForUsers
});

const mapDispatchToProps = (dispatch) => ({
    findUsers: (username) => dispatch(findUsers(username)),
    stopSearchingForUsers: () => dispatch(stopSearchingForUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);