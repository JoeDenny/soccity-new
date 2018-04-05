import React, { Component } from 'react';
import './styles/news-feed.css';
import NewsCard from './NewsCard';

class NewsFeed extends Component {
    render() {
        let newsItems;
        
        if(this.props.allNews) {
            newsItems = this.props.allNews.map(newsItem => {

                return (
                    <NewsCard key={newsItem.id} newsItem={newsItem} />
                );
            });
        }    

        return (
            <section className="news-feed">
                <ul>
                    {newsItems}
                </ul>
            </section>
        )
    }
}

export default NewsFeed;