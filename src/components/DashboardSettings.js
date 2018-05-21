import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import BookmarkButton from './BookmarkButton';
import RecentlyViewedButton from './RecentlyViewedButton';
import FilterSidebarButton from './FilterSidebarButton';
import KeywordHighlightButton from './KeywordHighlightButton';
import AutoRefreshButton from './AutoRefreshButton';
import LatestCommentsButton from './LatestCommentsButton';
import Filter from './Filter';

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
                <div className="left-icons">
                    {/* <TemplateTab onChangeTemplate={this.changeTemplate}/> */}

                    <button style={{display : this.props.isPopularNews ? 'none' : 'inline-block' }} className="btn btn-popular btn-primary" onClick={this.props.setPopularNews}>Popular News</button>

                    <button style={{display : this.props.isPopularNews ? 'inline-block' : 'none' }} className="btn btn-primary" onClick={this.refreshNews}>All News</button>
                    
                    <button className="btn btn-secondary" onClick={() => this.setActiveMenuItem('filter')}>Edit Filters</button>
                    
                    <span className="small-search">
                        <Filter setSearchTerm={this.props.setSearchTerm}/>
                    </span>
                </div>

                <div className="right-icons">
                    <ul className="settings-buttons">
                        <li className="item">
                            <KeywordHighlightButton />
                        </li>
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
                            <LatestCommentsButton
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
            </div>
        )
    }
}

export default DashboardSettings;