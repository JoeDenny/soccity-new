import React, { Component } from 'react';
import '../styles/comments.css';
import Comment from './Comment';
import AddComment from './AddComment';
import { connect } from 'react-redux';
import { removeActiveNews, addComment, getFollowings, toggleFollow } from '../../actions';

class ComentsContainer extends Component {

    componentDidMount() {
        this.props.getFollowings();
    }

    onSendComment = (comment, parentId) => {
        const { activeNews } = this.props;
        
        if (activeNews) {
            this.props.addComment(activeNews.id, comment, parentId);            
        }
    }

    toggleFollow = (userId) => {
        
        this.props.toggleFollow(userId);
    }

    render() {
        
        const activeNews = this.props.activeNews || [];
        
        let comments,
            hideMessageClass = '';
                
        if(activeNews.comments) {
            
            hideMessageClass = `no-comments ${activeNews.comments.length ? 'hide-message' : ''}`;

            comments = this.props.activeNews.comments.map(comment => {
                
                return (
                    <Comment
                        key={comment.id}
                        user={this.props.user}
                        followings={this.props.followings}
                        comment={comment}
                        sendReply={this.onSendComment}
                        toggleFollow={this.toggleFollow}/>
                );
            });
        }

        return (
            <div className="dashboard-chat">
                <div className="scrollable">
                    <p>Mention people using '@' + username.</p>
                    <ul>
                        {comments}
                    </ul>
                    <p className={hideMessageClass}>No comments yet!</p>
                    <AddComment
                        user={this.props.user}
                        onSubmit={this.onSendComment} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    followings: state.followings
});

const mapDispatchToProps = (dispatch) => ({
    removeActiveNews: () => dispatch(removeActiveNews()),
    addComment: (id, comment, parentId) => dispatch(addComment(id, comment, parentId)),
    toggleFollow: (userId) => dispatch(toggleFollow(userId)),
    getFollowings: () => dispatch(getFollowings()),
    // removeComment: (newsId, commentId: number) => dispatch(removeComment(newsId, commentId)),
    // editComment: (newsId: number, commentId: number, comment: string) => dispatch(editComment(newsId, commentId, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComentsContainer);