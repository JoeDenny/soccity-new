import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import BookmarkButton from './BookmarkButton';
import RecentlyViewedButton from './RecentlyViewedButton';
import FilterSidebarButton from './FilterSidebarButton';
import AutoRefreshButton from './AutoRefreshButton';
import CommentsButton from './CommentsButton';
import TemplateTab from './TemplateTab';

class DashboardSettings extends Component {
    constructor() {
        super();

        this.state = {
            recentlyButtonActive: false,
            bookmarkButtonActive: false,
            commentsButtonActive: false,
            filterButtonActive: false
        }
    }

    changeTemplate = (toggleOn) => {

        this.props.changeTemplate(toggleOn)
    }

    setActiveButton = (title) => {
        this.setState({
            [title]: !this.state[title]
        });
    }

    showBookmarkedArticles = (title) => {    
        this.setActiveButton(title)    
        this.props.showBookmarkedArticles();
    }

    openFilter = (title) => {
        this.setActiveButton(title)    
        this.props.openFilter();        
    }

    refreshNews = () => {
        
        this.props.refreshNews();
    }

    render() {
        return (
            <div className="dashboard-settings-container">

                <TemplateTab onChangeTemplate={this.changeTemplate}/>

                <ul className="settings-buttons">
                    <li className="item">
                        <AutoRefreshButton refreshNews={this.refreshNews}/>
                    </li>
                    <li className="item">
                        <RecentlyViewedButton
                            isActive={this.state.recentlyButtonActive}
                        />
                    </li>
                    <li className="item">
                        <BookmarkButton
                            onClick={() => this.showBookmarkedArticles('bookmarkButtonActive')}
                            isActive={this.state.bookmarkButtonActive}
                            
                        />
                    </li>
                    <li className="item">
                        <CommentsButton
                            isActive={this.state.commentsButtonActive}
                        />
                    </li>
                    <li className="item">
                        <FilterSidebarButton
                            onClick={() => this.openFilter('filterButtonActive')}
                            isActive={this.state.filterButtonActive}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardSettings;