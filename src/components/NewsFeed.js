import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.onOpenComments = this.onOpenComments.bind(this);
    }

    onOpenComments() {
        this.props.onOpenComments();
    }

    render() {
        let newsItems;
        
        if(this.props.allNews) {
            newsItems = this.props.allNews.map(newsItem => {

                return (
                    <NewsCard key={newsItem.id} newsItem={newsItem} onOpenComments={this.onOpenComments}/>
                );
            });
        }    

        return (
            <section className="news-feed">
                    <ul className="row">
                        {newsItems}
                    </ul>
            </section>
        )
    }
}

export default NewsFeed;