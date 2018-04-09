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
        const activeNews = this.props.activeNews || {
            title: '',
            comments: []
        }        

        let comments;
                
        if(activeNews.comments.length) {
            comments = this.props.activeNews.comments.map(comment => {
                
                return (
                    <Comment key={comment.id} comment={comment} />
                );
            });
        }    

        const className = `dashboard-chat card ${this.props.isVisible ? 'open' : ''}`;

        return (
            <div className={className}>    
                <header>
                    <h3>Comments for {activeNews.title}</h3>
                    <p onClick={this.onCloseComments}>close</p>
                </header>
                <div>
                    <ul>
                        {comments}
                    </ul>
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