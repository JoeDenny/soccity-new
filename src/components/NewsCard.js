import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveNews, setActiveMenuItem, openArticle } from '../actions';
import './styles/news-card.css';
import './styles/tweets.css';
import FavouriteIcon from './FavouriteIcon';
import BookmarkIcon from './BookmarkIcon';
import ShareSection from './ShareSection';
import TierIcon from './TierIcon';
import TwitterLogo from './Twitter_Logo.png';
import { Tweet } from 'react-twitter-widgets';
import icon from '../images/latest-comments.svg';
import Highlighter from "react-highlight-words";

class NewsCard extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false
        }
    }

    updateGrid = () => {

        this.props.updateGrid();
    }

    onOpenComments = () => {
        this.props.setActiveNews(this.props.newsItem);
        this.props.setActiveMenuItem('comments');        
    }

    openArticle = () => {
        
        this.props.openArticle(this.props.newsItem.id);
    }

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    closeDropdown = () => {
        this.setState({
            dropdownOpen: false
        })
    }

    render() {

        let thumbnail,
            newsCardClass,
            sourceLogoSrc,
            title,
            description,
            descriptionContent;


        let isOpen = this.state.dropdownOpen ? 'open' : ''
        
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

            if(this.props.newsItem.description) {

                descriptionContent = this.props.keywordsConfig && this.props.keywordsConfig.styles ?
                    <Highlighter
                        highlightClassName={"highlight-text " + this.props.keywordsConfig.styles.join(" ")}
                        className="description text-secondary"
                        searchWords={this.props.keywordsConfig.keywords}
                        autoEscape={true}
                        textToHighlight={description}
                    />
                    : <span>{description}</span>;
            }
        }

        const commentsIconClass = `comments-icon ${this.props.newsItem.comments.length ? 'active' : ''}`;

        if(this.props.type === 'tweet') {
            return (
                <div className={newsCardClass}>
                    <header>
                        <div className="source">
                            <img className="source-logo" src={sourceLogoSrc} alt=""/>
                            <h5><span style={{display: this.props.newsItem.source.type === 'twitter' ? 'inline' : 'none' }}>@</span>{this.props.newsItem.source.title}</h5>
    
                            <TierIcon tier={this.props.newsItem.source.groups[0].id - 1} />
                        </div>

                        <span className="text-tiny">{this.props.newsItem.posted_date_formated}</span>    
                    </header>
    
                    <Tweet tweetId={this.props.newsItem.title} onLoad={this.updateGrid} />
                    
                    <footer>

                        <div>    
                            <FavouriteIcon 
                                id={this.props.newsItem.id}
                                isFavorited={this.props.newsItem.is_favorited}
                                likes={this.props.newsItem.favorites_count} />    

                            <button type="button" className={commentsIconClass} onClick={this.onOpenComments}>
                                <img src={icon} alt=""/>
                                {/* <span className="text-secondary">{this.props.newsItem.comments.length}</span>             */}
                                <span className="text-secondary">Chat</span>                                            
                            </button>

                            <BookmarkIcon 
                                id={this.props.newsItem.id}
                                isBookmarked={this.props.newsItem.is_bookmarked}
                                bookmarksCount={this.props.newsItem.bookmarks_count} />
                        </div>
                        
                        <ul>
                            <div className="ellipsis-icon" onClick={this.toggleDropdown}></div>
                            <div className={"dropdown " + isOpen + " " + this.props.type}
                                id="dropdown">
                                <div className="menu card">
                                    <ShareSection id={this.props.newsItem.id}/>  
                                    <button className="btn btn-secondary">Remove Source</button> 
                                </div>
                            </div>     
                        </ul>
                    </footer>
                </div>
            )
        } else {
            
            let sourceName = this.props.newsItem.source.title.replace("-", " ");

            return (
                <div className={newsCardClass}>
                    <header>
                        <div className="source">
                            <img className="source-logo" src={sourceLogoSrc} alt=""/>
                            <h5>{sourceName}</h5>
    
                            <TierIcon tier={this.props.newsItem.source.groups[0].id - 1} />
                        </div>

                        <span className="text-tiny">{this.props.newsItem.posted_date_formated}</span>    
                    </header>

                    <a href={"https://c.sourcebuffet.net/news/" + this.props.newsItem.id} onClick={this.openArticle} target="_blank">
                        <div className="thumbnail"> 
                            <img
                                alt=""
                                src={thumbnail} />
                        </div>
                        <div className="content">
                            <h2 className="title" dangerouslySetInnerHTML={{__html: title}}></h2>
                            
                            
                            <p className="description text-secondary"
                               style={{display : description ? 'block' : 'none'}}>
                            
                                {descriptionContent}
                            </p>
                            
                            {/*                             
                            <p className="description text-secondary"
                               style={{display : description ? 'block' : 'none'}}
                               dangerouslySetInnerHTML={{__html: description}}></p> */}
                        </div>
                    </a>
                    <footer>

                        <div>    
                            <FavouriteIcon 
                                id={this.props.newsItem.id}
                                isFavorited={this.props.newsItem.is_favorited}
                                likes={this.props.newsItem.favorites_count} />    

                            <button type="button" className={commentsIconClass} onClick={this.onOpenComments}>
                                <img src={icon} alt=""/>
                                {/* <span className="text-secondary">{this.props.newsItem.comments.length}</span>             */}
                                <span className="text-secondary">Chat</span>                                            
                            </button>

                            <BookmarkIcon 
                                id={this.props.newsItem.id}
                                isBookmarked={this.props.newsItem.is_bookmarked}
                                bookmarksCount={this.props.newsItem.bookmarks_count} />
                        </div>
                        
                        <ul>
                            <div className="ellipsis-icon" onClick={this.toggleDropdown}></div>
                            <div className={"dropdown " + isOpen + " " + this.props.type}
                                id="dropdown">
                                <div className="menu card">
                                    <ShareSection id={this.props.newsItem.id}/>  
                                    <button className="btn btn-secondary">Remove Source</button> 
                                </div>
                            </div>     
                        </ul>
                    </footer>
                </div>
            )
        }
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