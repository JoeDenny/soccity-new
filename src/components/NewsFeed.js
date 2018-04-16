import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';

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
        let newsItems,
            searchTerm = this.props.searchTerm,
            className = `news-feed ${this.props.template === 1 ? 'template1' : 'template2'}`,
            loadMoreClass = `load-more-btn ${this.props.current_page >= this.props.last_page ? 'hide' : ''}`,
            newsFeedViewClass,
            noResultsClass;
        
        if(this.props.news) {
            
            newsItems = this.props.news.reduce((result, newsItem) => {
                if(this.props.showBookmarkedArticles) {

                    if(newsItem.is_bookmarked) {

                        result.push(<NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments}/>);
                    }
                } else if (newsItem.title.toLowerCase().includes(searchTerm)) {

                    result.push(<NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments}/>);
                }
                return result;           
            }, []);            

            noResultsClass = `dashboard-message text-center ${newsItems.length === 0 ? 'no-search-results' : '' }`
            newsFeedViewClass = this.props.showBookmarkedArticles ? 'bookmark-view' : 'main-view';
        }    

        return (
            <section className={className}>
                <ul className="row">
                    {newsItems}
                </ul>
                <div className={newsFeedViewClass}>
                    <p className="all-articles" onClick={this.showAllArticles}>Show all articles</p>
                    <p className={noResultsClass}>No results found</p>
                </div>
                <button
                    className={loadMoreClass} onClick={this.loadNextPage}>Load more news...</button>
            </section>
        )
    }
}

export default NewsFeed;