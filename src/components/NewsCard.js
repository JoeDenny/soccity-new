import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveNews } from '../actions';
import './styles/news-feed.css';


class NewsCard extends Component {
    constructor(props) {
        super(props);

        this.onOpenComments = this.onOpenComments.bind(this);
    }

    onOpenComments() {
        this.props.setActiveNews(this.props.newsItem);
        this.props.onOpenComments();
    }

    render() {
        const className = `like-icon ${this.props.newsItem.is_favorited ? 'active' : ''}`;

        return (
            <li>   
                <div className="news-card">
                    <header>
                        <h5>{this.props.newsItem.source.title}</h5>
                    </header>
                    <h2>{this.props.newsItem.title}</h2>
                    <p className="description">{this.props.newsItem.description}</p>


                    <footer>
                        <span className="text-tiny">{this.props.newsItem.posted_date_formated}</span>
                        <ul className="pull-right">
                            <li className="pull-left">
                                <button 
                                    type="button" 
                                    className={className}>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997"><path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z"/></svg>
                                </button>
                            </li>
                            <li className="pull-left">
                                <button type="button" className="comment-icon" onClick={this.onOpenComments}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M401.625 325.125h-191.25c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h191.25c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zm38.25-114.75h-267.75c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h267.75c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zM306 0C137.012 0 0 119.875 0 267.75c0 84.514 44.848 159.751 114.75 208.826V612l134.047-81.339c18.552 3.061 37.638 4.839 57.203 4.839 169.008 0 306-119.875 306-267.75S475.008 0 306 0zm0 497.25c-22.338 0-43.911-2.601-64.643-7.019l-90.041 54.123 1.205-88.701C83.5 414.133 38.25 345.513 38.25 267.75c0-126.741 119.875-229.5 267.75-229.5s267.75 102.759 267.75 229.5S453.875 497.25 306 497.25z"/></svg>
                                </button>
                            </li>
                        </ul>
                    </footer>
                </div>

            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setActiveNews: (news) => dispatch(setActiveNews(news))
});

export default connect(null, mapDispatchToProps)(NewsCard);