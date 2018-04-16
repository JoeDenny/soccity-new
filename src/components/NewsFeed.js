import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';
import TemplateTab from './TemplateTab';

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template: 1
        }
    }

    componentWillMount() {
        this.setState({
            template: 1
        })
    }

    onOpenComments = () => {
        this.props.onOpenComments();
    }

    changeTemplate = (toggleOn) => {
        
        if(toggleOn) {
            this.setState({
                template: 2
            });
        } else {
            this.setState({
                template: 1
            });
        }
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
            className = `news-feed ${this.state.template === 1 ? 'template1' : 'template2'}`,
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

                <TemplateTab onChangeTemplate={this.changeTemplate}/>

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