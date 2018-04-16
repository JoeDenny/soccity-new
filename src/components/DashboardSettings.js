import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import BookmarkButton from './BookmarkButton';
import RecentlyViewedButton from './RecentlyViewedButton';
import FilterSidebarButton from './FilterSidebarButton';
import AutoRefreshButton from './AutoRefreshButton';
import CommentsButton from './CommentsButton';

class DashboardSettings extends Component {
    setActiveButton = () => {
        // if(title === 'filterButtonActive') {
            
        // }
    }

    showBookmarkedArticles = () => {
        
        this.props.showBookmarkedArticles();
    }

    openFilter = () => {
        this.props.openFilter();        
    }

    refreshNews = () => {
        
        this.props.refreshNews();
    }

    render() {
        return (
            <div className="dashboard-settings-container">
                <ul className="settings-buttons">
                    <li className="item">
                        <AutoRefreshButton refreshNews={this.refreshNews}/>
                    </li>
                    <li className="item">
                        <RecentlyViewedButton
                            isActive={this.props.recentlyButtonActive}
                        />
                    </li>
                    <li className="item">
                        <BookmarkButton
                            onClick={this.showBookmarkedArticles}
                            isActive={this.props.bookmarkButtonActive}
                            
                        />
                    </li>
                    <li className="item">
                        <CommentsButton
                            isActive={this.props.commentsButtonActive}
                        />
                    </li>
                    <li className="item">
                        <FilterSidebarButton
                            onClick={this.openFilter}
                            isActive={this.props.filterButtonActive}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardSettings;