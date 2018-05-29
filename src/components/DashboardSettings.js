import React, { Component } from 'react';
import './styles/dashboard-settings.css';
import BookmarkButton from './BookmarkButton';
import RecentlyViewedButton from './RecentlyViewedButton';
// import FilterSidebarButton from './FilterSidebarButton';
import KeywordHighlightButton from './KeywordHighlightButton';
import AutoRefreshButton from './AutoRefreshButton';
// import LatestCommentsButton from './LatestCommentsButton';
import Filter from './Filter';

class DashboardSettings extends Component {
    constructor() {
        super();

        this.state = {
            liveFeed: false,
            scrolling: false,
            scrollingTimeOut: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        
        if (this.state.scrollingTimeOut) {
            clearTimeout(this.state.scrollingTimeOut);
        }

        if(window.scrollY > 100) {
            this.setState({
                scrolling: true
            });
        }

        this.setState({
            scrollingTimeOut: setTimeout(() => {
                this.setState({
                    scrolling: false
                })                
            }, 200)
        });


    }

    changeTemplate = (toggleOn) => {

        this.props.changeTemplate(toggleOn)
    }

    refreshNews = () => {
        
        this.props.refreshNews();
    }

    setActiveMenuItem = (item) => {

        this.props.setActiveMenuItem(item);
    }

    startAutoRefresh = () => {

        this.setState({
            liveFeed: true
        });        

        this.props.startAutoRefresh();
    }

    stopAutoRefresh = () => {

        this.setState({
            liveFeed: false
        });        

        this.props.stopAutoRefresh();
    }

    render() {
        
        return (
            <div className={"dashboard-settings-container " + this.state.scrolling}>
                <div className="left-icons">
                    {/* <TemplateTab onChangeTemplate={this.changeTemplate}/> */}

                    {/* <button style={{display : this.props.isPopularNews ? 'none' : 'inline-block' }} className="btn btn-popular btn-primary" onClick={this.props.setPopularNews} data-tip="Show the most popular news right now.">Popular News</button> */}

                    <button style={{display : this.props.isPopularNews ? 'inline-block' : 'none' }} className="btn btn-primary" onClick={this.refreshNews} data-tip="Return to your personalised feed.">All News</button>
                    
                    <button style={{display : this.state.liveFeed ? 'none' : 'inline-block' }} className="btn btn-primary btn-popular" onClick={() => this.startAutoRefresh()} data-tip="Live Feed: News will automatically be added to your dashboard as it's published.">Live Feed</button>

                    <button style={{display : this.state.liveFeed ? 'inline-block' : 'none' }} className="btn btn-primary btn-livefeed" onClick={() => this.stopAutoRefresh()} data-tip="Turn off Live Feed.">Passive Feed</button>

                    {/* <button className="btn btn-secondary" onClick={() => this.setActiveMenuItem('filter')} data-tip="Edit the settings for your active dashboard.">Edit Filters</button> */}

                    
                    <span className="small-search">
                        <Filter setSearchTerm={this.props.setSearchTerm} data-tip="Quick Search"/>
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
                        {/* <li className="item">
                            <LatestCommentsButton
                                setActiveMenuItem={this.setActiveMenuItem}
                                isActive={this.props.activeMenuItem === 'latestComments'}
                            />
                        </li> */}
                        {/* <li className="item">
                            <FilterSidebarButton
                                setActiveMenuItem={this.setActiveMenuItem}
                                isActive={this.props.activeMenuItem === 'filter'}
                            />
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DashboardSettings;