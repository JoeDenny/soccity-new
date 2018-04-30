import React, { Component } from 'react';
import './styles/news-ticker.css';

class PopularNewsTicker extends Component {
    onClick = () => {
        this.props.onClick();
    }
    render() {
        let popularNews;

        if(this.props.popularNews) {
            
            popularNews = this.props.popularNews.map(news => {

                return (
                    <a key={news.id} href={news.link} target="_blank" className="bold">{news.title}</a>
                )
            })
        }

        return (
            <section className='news-ticker card'>
                <h4>Popular News</h4>
                {popularNews}
            </section>
        );
    }
}

export default PopularNewsTicker;