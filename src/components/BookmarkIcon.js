import React from 'react';
import './styles/bookmark.css';
import { bookmarkArticle } from '../actions';
import { connect } from 'react-redux';
import icon from '../images/bookmark.svg';

const BookmarkIcon = (props) => {
    const className = `bookmark-icon ${props.isBookmarked ? 'active' : ''}`;

    const bookmark = () => {

        props.bookmarkArticle(props.id);
    };    

    return (
        <button 
            type="button" 
            className={className}
            onClick={bookmark}
        >
            <img src={icon} alt=""/>
            
            {/* <span className="text-secondary">{props.bookmarksCount}</span> */}
            <span className="text-secondary">Save</span>
        </button>
    );
};

const mapDispatchToProps = (dispatch) => ({
    bookmarkArticle: (id) => dispatch(bookmarkArticle(id))
});

export default connect(null, mapDispatchToProps)(BookmarkIcon);