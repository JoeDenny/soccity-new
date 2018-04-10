import React, { Component } from 'react';
import './styles/comments.css';
import Comment from './Comment';
import AddComment from './AddComment';
import { connect } from 'react-redux';
import { removeActiveNews, addComment } from '../actions';

class ComentsContainer extends Component {
    constructor() {
        super();

        this.onCloseComments = this.onCloseComments.bind(this);
    }

    onCloseComments = () => {
        this.props.removeActiveNews();
        this.props.onCloseComments();
    }

    onSendComment = (comment) => {
        const { activeNews } = this.props;

        if (activeNews) {
            this.props.addComment(activeNews.id, comment);
        }
    }

    render() {
        const activeNews = this.props.activeNews || {};
        
        let comments;
                
        if(activeNews.comments) {
            comments = this.props.activeNews.comments.map(comment => {
                
                return (
                    <Comment key={comment.id} comment={comment} />
                );
            });
        }    

        const className = `dashboard-chat card ${this.props.isVisible ? 'open' : ''}`;
        const hideMessage = activeNews.comments ? 'hide-message' : '';
        
        return (
            <div className={className}>  

                <header>
                    <h3>{activeNews.title}</h3>
                    <button type="button" className="close-icon" onClick={this.onCloseComments}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                    </button>
                </header>
                <div className="comment-list">
                    <ul>
                        {comments}
                    </ul>
                    <p className={hideMessage}>No comments yet!</p>
                </div>

                <AddComment
                    user={this.props.user}
                    onSubmit={this.onSendComment}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activeNews: state.activeNews,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    removeActiveNews: () => dispatch(removeActiveNews()),
    // removeComment: (newsId, commentId: number) => dispatch(removeComment(newsId, commentId)),
    addComment: (id, comment) => dispatch(addComment(id, comment)),
    // editComment: (newsId: number, commentId: number, comment: string) => dispatch(editComment(newsId, commentId, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComentsContainer);