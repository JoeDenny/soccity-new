import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecentlyViewed } from '../../actions';
import NewsCard from '../NewsCard';

class RecentlyViewedContainer extends Component {

    componentWillMount() {
        this.props.getRecentlyViewed();    
    }

    render() {
        let recentlyViewed = [];
                
        if(this.props.recentlyViewed) {
            
            recentlyViewed = this.props.recentlyViewed.map(newsItem => {
                
                return (
                    <NewsCard key={newsItem.id} newsItem={newsItem} />
                );
            });
        }

        return (
            <div className="dashboard-recently-viewed-container">
                <div className="scrollable">
                    <ul>
                        {recentlyViewed}
                        <p style={{ display: !recentlyViewed.length ? 'block' : 'none' }}>You haven't viewed any articles yet!</p>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recentlyViewed: state.recentlyViewed
});

const mapDispatchToProps = (dispatch) => ({
    getRecentlyViewed: () => dispatch(getRecentlyViewed()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyViewedContainer);