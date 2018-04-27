import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import BookmarkButton from './BookmarkButton';
import RecentlyViewedButton from './RecentlyViewedButton';
import FilterSidebarButton from './FilterSidebarButton';
import AutoRefreshButton from './AutoRefreshButton';
import CommentsButton from './CommentsButton';
import TemplateTab from './TemplateTab';

class DashboardSettings extends Component {
    changeTemplate = (toggleOn) => {

        this.props.changeTemplate(toggleOn)
    }

    refreshNews = () => {
        
        this.props.refreshNews();
    }

    setActiveMenuItem = (item) => {

        this.props.setActiveMenuItem(item);
    }

    render() {
        return (
            <div className="dashboard-settings-container">

                <TemplateTab onChangeTemplate={this.changeTemplate}/>

                {/* <button className="btn btn-primary" onClick={this.props.getPopularNews}>get popular news</button> */}
                <button className="btn btn-secondary" onClick={() => this.setActiveMenuItem('filter')}>Edit Filters</button>
                
                <ul className="settings-buttons">
                    <li className="item">
                        <AutoRefreshButton refreshNews={this.refreshNews}/>
                    </li>
                    <li className="item">
                        <RecentlyViewedButton
                            setActiveMenuItem={this.setActiveMenuItem}                        
                            isActive={this.props.activeMenuItem === 'recentlyViewed'}
                        />
                    </li>
                    <li className="item">
                        <BookmarkButton
                            setActiveMenuItem={this.setActiveMenuItem}
                            isActive={this.props.activeMenuItem === 'bookmarks'}
                        />
                    </li>
                    <li className="item">
                        <CommentsButton
                            setActiveMenuItem={this.setActiveMenuItem}
                            isActive={this.props.activeMenuItem === 'latestComments'}
                        />
                    </li>
                    <li className="item">
                        <FilterSidebarButton
                            setActiveMenuItem={this.setActiveMenuItem}
                            isActive={this.props.activeMenuItem === 'filter'}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardSettings;