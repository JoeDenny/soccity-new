import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import '../styles/bookmarks.scss';

class BookmarksContainer extends Component {

    render() {

        let newsItems = [];
        
        if(this.props.news) {

            newsItems = this.props.news.reduce((result, newsItem) => {
                if(newsItem.is_bookmarked) {

                    result.push(<NewsCard key={newsItem.id} newsItem={newsItem} />);
                }
                return result;           
            }, []);            
        }    
        return (
            <div className="bookmarks-container">
                <div className="fixed-content">  
                    <header>
                        <h3>Bookmarked Articles</h3>
                    </header>

                    <p style={{ display: !newsItems.length ? 'block' : 'none' }}>You don't have any articles bookmarked!</p>

                    <div className="scrollable">
                        {newsItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default BookmarksContainer;