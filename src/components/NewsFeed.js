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

    render() {
        let newsItems;

        let className = `news-feed ${this.state.template === 1 ? 'template1' : 'template2'}`;

        let loadMoreClass = `load-more-btn ${this.props.current_page >= this.props.last_page ? 'hide' : ''}`;
        
        if(this.props.news) {
            newsItems = this.props.news.map(newsItem => {

                return (
                    <NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments}/>
                );
            });
        }    

        return (
            <section className={className}>

                    <TemplateTab onChangeTemplate={this.changeTemplate}/>

                    <ul className="row">
                        {newsItems}
                    </ul>

                    <button
                        className={loadMoreClass} onClick={this.loadNextPage}>Load more news...</button>
            </section>
        )
    }
}

export default NewsFeed;