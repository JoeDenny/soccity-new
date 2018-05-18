import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';
import LoadingIcon from './LoadingIcon';
// import AdvertContainer from './AdvertContainer';
import Masonry from 'react-masonry-component';

class NewsFeed extends Component {
    constructor() {
        super();

        this.state = {
            update: 'false'
        }    
    }

    loadNextPage = () => {
        this.props.loadNextPage();
    }

    refreshNews = () => {
        this.props.refreshNews();
    }

    render() {
        let newsItems = [],
            searchTerm = this.props.searchTerm,
            className = `news-feed ${this.props.template === 1 ? 'template1' : 'template2'}`,
            loadMoreClass = `load-more-btn ${this.props.current_page >= this.props.last_page ? 'hide' : ''}`,
            noResultsClass;

        if(this.props.news) {

            newsItems = this.props.news.reduce((result, newsItem, index) => {

                // if(index === 6 || index === 13 || index === 20 || index === 27) {
                    
                //     result.push(
                //         <li key={newsItem.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                //             <AdvertContainer user={this.props.user} key={index}/>
                //         </li>
                //     )
                // } else 
                if (newsItem.title.toLowerCase().includes(searchTerm)) {

                    if(newsItem.additional) {
                        result.push(
                            // <li key={newsItem.id} className="tweet-container col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            //     <Tweet tweetId={newsItem.title} onLoad={ () => {this.setState({update: 'true'})}}/>
                            // </li>
                            <li key={newsItem.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <NewsCard newsItem={newsItem}  searchTerm={searchTerm} type="tweet" updateGrid={ () => {this.setState({update: 'true'})}}/>
                            </li>
                        )
                    } else {

                        result.push(    
                            <li key={newsItem.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <NewsCard newsItem={newsItem}  searchTerm={searchTerm} />
                            </li>
                        );
                    }

                }
                return result;           
            }, []);            

            noResultsClass = `no-search-results-message ${newsItems.length === 0 ? 'show' : '' }`
        }    

        return (
            <section
                id="news-feed"
                className={className}>
                
                <LoadingIcon show={this.props.loading}/>

                <div>  

                    <ul>
                    <Masonry
                        update={this.state.update}
                    >
                        {newsItems}
                    </Masonry>
                    </ul>

                    <div className="news-feed-messages"
                         style={{ display: this.props.loading ? 'none' : 'block' }}>
                
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