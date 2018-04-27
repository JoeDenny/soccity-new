import React, { Component } from 'react';
import './styles/menu.css';
import CommentsContainer from './menu/CommentsContainer';
import BookmarksContainer from './menu/BookmarksContainer';
import FilterContainer from './menu/FilterContainer';
import LatestCommentsContainer from './menu/LatestCommentsContainer';

class Menu extends Component {

    closeMenu = () => {
        
        this.props.closeMenu();
    }

    render() {
        
        const menuClass = this.props.isOpen ? 'open' : '';

        let activeMenuItem,
            title;

        switch(this.props.activeMenuItem) {
            case 'comments':
                    title = <h3 dangerouslySetInnerHTML={{__html: this.props.activeNews.title}}></h3>;
                    activeMenuItem = <CommentsContainer activeNews={this.props.activeNews}/>;
                    break;
            case 'filter':
                    title = <h3>Filter</h3>;
                    activeMenuItem = <FilterContainer />;
                    break;
            case 'latestComments':
                    title = <h3>Latest Comments</h3>;    
                    activeMenuItem = <LatestCommentsContainer />;
                    break;
            case 'bookmarks':
                    title = <h3>Your Bookmarked Articles</h3>
                    activeMenuItem = <BookmarksContainer news={this.props.news} />;
                    break;
            case 'recentlyViewed':
                    title = <h3>Recenlty Viewed Articles</h3>
                    activeMenuItem = <h1>recentlyViewed</h1>;
                    break;
            default:
                return <div className={"menu-container " + menuClass}><h1>menu y'all</h1></div>;
        }
        
        return (
            <div className={"menu-container " + menuClass}>
                <div className="fixed-content">  
                    <header>
                        
                        {title}

                        <button
                            type="button"
                            className="close-icon pull-right"
                            onClick={this.closeMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                        </button>
                    </header>

                    {activeMenuItem}
                    
                </div>
            </div>
        );
    }
}

export default Menu;