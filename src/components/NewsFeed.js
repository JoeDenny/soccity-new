import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';
import LoadingIcon from './LoadingIcon';
import ErrorMessages from './ErrorMessages';

class NewsFeed extends Component {

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
               
                if (newsItem.title.toLowerCase().includes(searchTerm)) {

                    result.push(

                        <li key={newsItem.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <NewsCard newsItem={newsItem} />
                        </li>
                    );
                }
                return result;           
            }, []);            

            noResultsClass = `no-search-results-message ${newsItems.length === 0 ? 'show' : '' }`
        }    

        return (
            <section className={className}>

                <ErrorMessages errors={this.props.errors} />
                <LoadingIcon show={this.props.loading}/>

                <div style={{ display: this.props.loading ? 'none' : 'block' }}>  
                
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