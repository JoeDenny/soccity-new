import React from 'react';
import './styles/favourite.css';
import { favouriteArticle } from '../actions';
import { connect } from 'react-redux';
import icon from '../images/favourite.svg';

const FavouriteIcon = (props) => {
    const className = `favourite-icon ${props.isFavorited ? 'active' : ''}`;

    const favourite = () => {

        props.favouriteArticle(props.id);
    };

    return (
        <button 
            type="button" 
            className={className}
            onClick={favourite}
        >
            <img src={icon} alt="" />
            {/* <span className="text-secondary">{props.likes}</span> */}
            <span className="text-secondary">Like</span>
        </button>
    );
};

const mapDispatchToProps = (dispatch) => ({
    favouriteArticle: (id) => dispatch(favouriteArticle(id))
});

export default connect(null, mapDispatchToProps)(FavouriteIcon);