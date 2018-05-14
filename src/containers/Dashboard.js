import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader';
import AuthWrapper from '../components/AuthWrapper';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import NewsFeed from '../components/NewsFeed';
import { getNews, getPopularNews, setPopularNews, getDashboards, setActiveDashboard, openMenu, closeMenu, setActiveMenuItem, setAutoRefresh } from '../actions';
import DashboardSettings from '../components/DashboardSettings';
import './styles/dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            template: 1,
            isFilterOpen: false,
            searchTerm: ''
        }                
    }

    componentWillMount() {
        this.getNews();
        this.props.getPopularNews();
        this.props.getDashboards();
        this.props.setAutoRefresh(120000);
    }

    getNews = (pageNumber) => {

        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss'),
            page: pageNumber || 1
        }; 
        
        this.props.getNews(params);        
    }

    openMenu = () => {        
        this.props.openMenu();      
    }

    closeMenu = () => {        
        this.props.closeMenu();      
    }

    changeTemplate = (toggleOn) => {
        
        if(toggleOn) {
            this.setState({
                template: 2
            });
        } else {
            this.setState({
                template: 1
            });
        }
    }

    openFilter = () => {
        this.setState({
            ...this.state,        
            isFilterOpen: !this.state.isFilterOpen
        })
    }

    closeFilter = () => {
        this.setState({
            ...this.state,
            isFilterOpen: false
        });
    }

    loadNextPage = () => {
        const params = {
            page: this.props.current_page + 1
        }

        this.getNews(params);

        window.scrollTo(0,0);
    }

    setSearchTerm = (searchTerm) => {

        this.setState({
            ...this.state,
            searchTerm: searchTerm
        })
    }

    setActiveMenuItem = (item) => {
        this.props.setActiveMenuItem(item);
    }

    setActiveDashboard = (dashboard) => {

        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss'),
            page: 1,
            source_type: dashboard.source_type,
            sources: dashboard.sources,
            teams: dashboard.teams,
            players: dashboard.players,
            competitions: dashboard.competitions
        }        

        this.props.getNews(params);
        this.props.setActiveDashboard(dashboard);
    }

    render() {
        const { user, activeNews, current_page, last_page, isMenuOpen, activeMenuItem } = this.props;

        const news = this.props.isPopularNews ? this.props.popularNews : this.props.news;        

        const menuClass = isMenuOpen ? 'menu-open' : 'menu-closed';            

        return (
            <AuthWrapper>
                <section className="app-dashboard">
                    <DashboardHeader
                        user={user}
                        setSearchTerm={this.setSearchTerm}/>
                    
                    <DashboardSettings
                        setPopularNews={this.props.setPopularNews}
                        setSearchTerm={this.setSearchTerm}
                        isPopularNews={this.props.isPopularNews}
                        setActiveMenuItem={this.setActiveMenuItem}
                        activeMenuItem={activeMenuItem}
                        refreshNews={this.getNews}
                        changeTemplate={this.changeTemplate}
                        openFilter={this.openFilter}/>

                    <Sidebar dashboards={this.props.dashboards} setActiveDashboard={this.setActiveDashboard}/>

                    <div className={menuClass}>
                        <NewsFeed
                            className={menuClass}
                            news={news}
                            user={this.props.user}
                            errors={this.props.errors}
                            loading={this.props.loading}
                            refreshNews={this.getNews}
                            current_page={current_page}
                            last_page={last_page}
                            loadNextPage={this.loadNextPage}
                            searchTerm={this.state.searchTerm}
                            template={this.state.template} />

                        <Menu
                            isOpen={isMenuOpen}
                            news={news}
                            activeNews={activeNews}
                            activeDashboard={this.props.activeDashboard}
                            closeMenu={this.closeMenu}
                            activeMenuItem={activeMenuItem} />
                    </div>
                </section>
            </AuthWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    news: state.news,
    activeNews: state.activeNews,
    activeMenuItem: state.activeMenuItem,
    popularNews: state.popularNews,
    isPopularNews: state.isPopularNews,
    autoRefreshRate: state.autoRefreshRate,
    errors: state.errors,
    dashboards: state.dashboards,  
    activeDashboard: state.activeDashboard,
    current_page: state.current_page,
    last_page: state.last_page,
    loading: state.loading,
    isMenuOpen: state.isMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
    getNews: (params) => dispatch(getNews(params)),
    getPopularNews: () => dispatch(getPopularNews()),
    setPopularNews: () => dispatch(setPopularNews()),
    getDashboards: () => dispatch(getDashboards()),
    setAutoRefresh: (time) => dispatch(setAutoRefresh(time)),
    openMenu: () => dispatch(openMenu()),   
    closeMenu: () => dispatch(closeMenu()),
    setActiveDashboard: (dashboard) => dispatch(setActiveDashboard(dashboard)),
    setActiveMenuItem: (item) => dispatch(setActiveMenuItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);