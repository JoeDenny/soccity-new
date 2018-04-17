import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';
import LoadingIcon from './LoadingIcon';

class NewsFeed extends Component {

    onOpenComments = () => {
        this.props.onOpenComments();
    }

    loadNextPage = () => {
        this.props.loadNextPage();
    }

    showAllArticles = () => {
        this.props.showAllArticles();
    }

    render() {
        let newsItems = [],
            searchTerm = this.props.searchTerm,
            className = `news-feed ${this.props.template === 1 ? 'template1' : 'template2'}`,
            loadMoreClass = `load-more-btn ${this.props.current_page >= this.props.last_page ? 'hide' : ''}`,
            noResultsClass;
        
        if(this.props.news) {

            newsItems = this.props.news.reduce((result, newsItem) => {
                if(this.props.showBookmarkedArticles) {

                    if(newsItem.is_bookmarked) {

                        result.push(<NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments} />);
                    }
                } else if (newsItem.title.toLowerCase().includes(searchTerm)) {

                    result.push(<NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments}/>);
                }
                return result;           
            }, []);            

            noResultsClass = `no-search-results-message ${newsItems.length === 0 ? 'show' : '' }`
        }    

        return (
            <section className={className}>

                <LoadingIcon show={this.props.isFetching}/>

                <div style={{ display: this.props.isFetching ? 'none' : 'block' }}>  

                    <div style={{ display: this.props.showBookmarkedArticles ? 'block' : 'none' }}>
                        {/* <p className="back-to-feed"
                            onClick={this.showAllArticles}>Back to main feed...</p> */}

                        <p className="news-feed-messages" style={{ display: !newsItems.length ? 'block' : 'none' }}>You don't have any articles bookmarked!</p>
                    </div>
                
                    <ul className="row">
                        {newsItems}
                    </ul>

                    <div className="news-feed-messages">
                        <div style={{ display: this.props.showBookmarkedArticles ? 'none' : 'block' }}>

                            <p className={noResultsClass}>No results found</p>

                            <p
                                style={{display: this.props.searchTerm ? 'none' : 'block' }}
                                className={loadMoreClass} onClick={this.loadNextPage}>Load more news...</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsFeed;