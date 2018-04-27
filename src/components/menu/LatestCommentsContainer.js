import React, { Component } from 'react';
import '../styles/comments.css';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getLatestComments } from '../../actions';

class LatestCommentsContainer extends Component {

    componentWillMount() {
        this.props.getLatestComments();        
    }

    render() {
        let latestComments;
                
        if(this.props.latestComments) {
            
            latestComments = this.props.latestComments.map(comment => {

                let newsCard = this.props.news.filter(article => {                    
                    return article.id === comment.commentable_id;
                });
                
                return (
                    <Comment key={comment.id} comment={comment} article={newsCard[0]}/>
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
    news: state.news,
    latestComments: state.latestComments
});

const mapDispatchToProps = (dispatch) => ({
    getLatestComments: () => dispatch(getLatestComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestCommentsContainer);