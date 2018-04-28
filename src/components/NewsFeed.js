import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';
import LoadingIcon from './LoadingIcon';
import AdvertContainer from './AdvertContainer';
// import ErrorMessages from './ErrorMessages';

class NewsFeed extends Component {

    loadNextPage = () => {
        this.props.loadNextPage();
    }

    refreshNews = () => {
        this.props.refreshNews();
    }

    render() {
        let newsItems = [],
            searchTerm = this.props.searchTerm,
            className = `news-feed container ${this.props.template === 1 ? 'template1' : 'template2'}`,
            loadMoreClass = `load-more-btn ${this.props.current_page >= this.props.last_page ? 'hide' : ''}`,
            noResultsClass;
        
        if(this.props.news) {

            newsItems = this.props.news.reduce((result, newsItem, index) => {
                
                if(index === 6 || index === 13 || index === 20 || index === 27) {

                    result.push(<AdvertContainer user={this.props.user} key={index}/>)
                } else if (newsItem.title.toLowerCase().includes(searchTerm)) {

                    result.push(

                        <li key={newsItem.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
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

                {/* <ErrorMessages errors={this.props.errors} /> */}

                <LoadingIcon show={this.props.loading}/>

                <div style={{ display: this.props.loading ? 'none' : 'block' }}>  
                
                    <ul className="row">
                        {newsItems}
                    </ul>

                    <div className="news-feed-messages">
                
                        <div className={noResultsClass}>
                            <p>No results found</p>
                            <p className="link" onClick={this.refreshNews}>Back to main feed?</p>
                        </div>

                        <p
                            style={{display: this.props.searchTerm || newsItems.length < 50 ? 'none' : 'block' }}
                            className={loadMoreClass} onClick={this.loadNextPage}>Load more news...</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsFeed;