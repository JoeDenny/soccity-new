import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveNews, setActiveMenuItem, openArticle } from '../actions';
import './styles/news-card.css';
import FavouriteIcon from './FavouriteIcon';
import BookmarkIcon from './BookmarkIcon';
import ShareSection from './ShareSection';
import TierIcon from './TierIcon';
import TwitterLogo from './Twitter_Logo.png';


class NewsCard extends Component {

    onOpenComments = () => {
        this.props.setActiveNews(this.props.newsItem);
        this.props.setActiveMenuItem('comments');        
    }

    openArticle = () => {
        this.props.openArticle(this.props.newsItem.id);
    }

    getHighlightedText(text, higlight) {
        // Split on higlight term and include term into parts, ignore case
        let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
        return <span> { parts.map((part, i) => 
            <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { color: '#6bac0f' } : {} }>
                { part }
            </span>)
        } </span>;
    }

    render() {

        let thumbnail,
            newsCardClass,
            sourceLogoSrc,
            title,
            description;
        
        if(this.props.newsItem) {

            const sourceType = this.props.newsItem.source.type;

            newsCardClass = `news-card clearfix ${sourceType}`;

            thumbnail = this.props.newsItem.thumbnail.includes("thumbnail_generic") ? this.props.newsItem.source.logo_path : this.props.newsItem.thumbnail;

            if(sourceType === 'twitter') {
                thumbnail = TwitterLogo;
            }

            sourceLogoSrc = sourceType === 'rss' ? this.props.newsItem.source.logo_path : this.props.newsItem.additional.image;  

            title = this.props.newsItem.title;
            description = this.props.newsItem.description;

        //     if(this.props.searchTerm) {
        //        title = this.getHighlightedText(this.props.newsItem.title, this.props.searchTerm);
        //        description = this.getHighlightedText(this.props.newsItem.description, this.props.searchTerm);
        //    } else {
        //        title = this.props.newsItem.title;
        //        description = this.props.newsItem.description;
        //    }
        }

        const commentsIconClass = `comments-icon ${this.props.newsItem.comments.length ? 'active' : ''}`;
        
        return (
            <div className={newsCardClass}>

                <a href={this.props.newsItem.link} onClick={this.openArticle} target="_blank">
                    <div className="thumbnail"> 
                        <img
                            alt=""
                            src={thumbnail} />
                    </div>
                    <div className="content">
                        <header>
                            <img className="source-logo" src={sourceLogoSrc} alt=""/>
                            
                            <div className="source">
                                <h5><span style={{display: this.props.newsItem.source.type === 'twitter' ? 'inline' : 'none' }}>@</span>{this.props.newsItem.source.title}</h5>

                                <TierIcon tier={this.props.newsItem.source.groups[0].id - 1} />
                            </div>
                            
                            <h2 className="title">{title}</h2>
                            {/* <h2 className="title"
                                dangerouslySetInnerHTML={{__html: title}}></h2> */}

                        </header>
                        
                        <p className="description text-secondary">{description}</p>

                        {/* <p className="description text-secondary" dangerouslySetInnerHTML={{__html: this.props.newsItem.description}}></p> */}
                    </div>
                </a>
                <footer>
                    <ShareSection />
                    <span className="text-tiny">{this.props.newsItem.posted_date_formated}</span>
                    <ul className="pull-right">
                        <li className="pull-left">

                            <BookmarkIcon 
                                id={this.props.newsItem.id}
                                isBookmarked={this.props.newsItem.is_bookmarked}
                                bookmarksCount={this.props.newsItem.bookmarks_count} />
                        </li>
                        <li className="pull-left">

                            <FavouriteIcon 
                                id={this.props.newsItem.id}
                                isFavorited={this.props.newsItem.is_favorited}
                                likes={this.props.newsItem.favorites_count} />
                        </li>
                        <li className="pull-left">
                            <button type="button" className={commentsIconClass} onClick={this.onOpenComments}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M401.625 325.125h-191.25c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h191.25c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zm38.25-114.75h-267.75c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h267.75c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zM306 0C137.012 0 0 119.875 0 267.75c0 84.514 44.848 159.751 114.75 208.826V612l134.047-81.339c18.552 3.061 37.638 4.839 57.203 4.839 169.008 0 306-119.875 306-267.75S475.008 0 306 0zm0 497.25c-22.338 0-43.911-2.601-64.643-7.019l-90.041 54.123 1.205-88.701C83.5 414.133 38.25 345.513 38.25 267.75c0-126.741 119.875-229.5 267.75-229.5s267.75 102.759 267.75 229.5S453.875 497.25 306 497.25z"/></svg>
                            <span className="text-secondary">{this.props.newsItem.comments.length}</span>            
                            </button>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    activeNews: state.activeNews
});

const mapDispatchToProps = (dispatch) => ({
    setActiveNews: (news) => dispatch(setActiveNews(news)),
    setActiveMenuItem: (item) => dispatch(setActiveMenuItem(item)),
    openArticle: (id) => dispatch(openArticle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);