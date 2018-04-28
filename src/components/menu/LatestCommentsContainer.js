import React, { Component } from 'react';
import '../styles/comments.css';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getLatestComments, toggleFollow, getFollowings } from '../../actions';

class LatestCommentsContainer extends Component {

    componentWillMount() {
        this.props.getLatestComments();   
        this.props.getFollowings();     
    }

    toggleFollow = (userId) => {
        
        this.props.toggleFollow(userId);
    }

    render() {
        let latestComments;
                
        if(this.props.latestComments) {
            
            latestComments = this.props.latestComments.map(comment => {

                let newsCard = this.props.news.filter(article => {                    
                    return article.id === comment.commentable_id;
                });
                
                return (
                    <Comment
                        key={comment.id}
                        user={this.props.user}
                        comment={comment}
                        followings={this.props.followings}                        
                        article={newsCard[0]}
                        toggleFollow={this.toggleFollow} />
                );
            });
        }

        return (
            <div className="dashboard-chat dashboard-latest-comments">
                <div className="scrollable">
                    <ul>
                        {latestComments}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    news: state.news,
    latestComments: state.latestComments,
    followings: state.followings    
});

const mapDispatchToProps = (dispatch) => ({
    getLatestComments: () => dispatch(getLatestComments()),
    getFollowings: () => dispatch(getFollowings()),    
    toggleFollow: (userId) => dispatch(toggleFollow(userId))    
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestCommentsContainer);