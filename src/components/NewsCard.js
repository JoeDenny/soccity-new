import React, { Component } from 'react';
import './styles/news-feed.css';

class NewsCard extends Component {
    render() {
        return (
            <li>   
                <div className="news-card">
                    <header>
                        <h5>{this.props.newsItem.source.title}</h5>
                    </header>
                    <h2>{this.props.newsItem.title}</h2>
                    <p className="description">{this.props.newsItem.description}</p>


                    <footer>
                        <span class="text-tiny">{this.props.newsItem.posted_date_formated}</span>
                    </footer>
                </div>
            </li>
        )
    }
}

export default NewsCard;