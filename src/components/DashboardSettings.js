import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import BookmarkButton from './BookmarkButton';
import RecentlyViewedButton from './RecentlyViewedButton';
import FilterSidebarButton from './FilterSidebarButton';
import AutoRefreshButton from './AutoRefreshButton';
import CommentsButton from './CommentsButton';

class DashboardSettings extends Component {
    setActiveButton = (title) => {
        return () => {
            this.props.onClick(title);
        };
    }
    render() {
        return (
            <div className="dashboard-settings-container">
                <ul className="settings-buttons">
                    <li className="item">
                        <AutoRefreshButton />
                    </li>
                    <li className="item">
                        <RecentlyViewedButton
                            onClick={this.setActiveButton('recentlyButtonActive')}
                            isActive={this.props.recentlyButtonActive}
                        />
                    </li>
                    <li className="item">
                        <BookmarkButton
                            onClick={this.setActiveButton('bookmarkButtonActive')}
                            isActive={this.props.bookmarkButtonActive}
                            
                        />
                    </li>
                    <li className="item">
                        <CommentsButton
                            onClick={this.setActiveButton('isChatVisible')}
                            isActive={this.props.commentsButtonActive}
                        />
                    </li>
                    <li className="item">
                        <FilterSidebarButton
                            onClick={this.setActiveButton('filterButtonActive')}
                            isActive={this.props.filterButtonActive}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardSettings;