import React, { Component } from 'react';
import './styles/comment.css';

class FavouriteIcon extends Component {
    render() {
        const comment = this.props.comment;

        const className = `like-icon ${this.props.newsItem.is_favorited ? 'active' : ''}`;

        return (
            <button 
                type="button" 
                className={className}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997"><path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z"/></svg>
            </button>
        )
    }
}

export default FavouriteIcon;