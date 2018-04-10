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
            <ul className="dashboard-settings-buttons">
                <li className="dashboard-filter-buttons__item">
                    <AutoRefreshButton />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <RecentlyViewedButton
                        onClick={this.setActiveButton('recentlyButtonActive')}
                        isActive={this.props.recentlyButtonActive}
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <BookmarkButton
                        onClick={this.setActiveButton('bookmarkButtonActive')}
                        isActive={this.props.bookmarkButtonActive}
                        
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <CommentsButton
                        onClick={this.setActiveButton('isChatVisible')}
                        isActive={this.props.commentsButtonActive}
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <FilterSidebarButton
                        onClick={this.setActiveButton('filterButtonActive')}
                        isActive={this.props.filterButtonActive}
                    />
                </li>
            </ul>
        )
    }
}

export default DashboardSettings;