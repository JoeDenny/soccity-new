import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader';
import AuthWrapper from '../components/AuthWrapper';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import NewsFeed from '../components/NewsFeed';
import { getNews, getCustomNews, getCompetitions, getTeams, getPlayers, getSources, updateNews, getPopularNews, getDashboards, setActiveDashboard, openMenu, closeMenu, setActiveMenuItem, setAutoRefresh } from '../actions';
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
        
        this.props.getDashboards();
                            
        this.getNews();

        this.props.getCompetitions();
        this.props.getTeams();
        this.props.getPlayers();
        this.props.getSources();

        window.scrollTo(0,0);
    }

    startAutoRefreshTimer = (refreshRate = 300000) => {

        this.props.setAutoRefresh(refreshRate);
        
        this.interval = setInterval(function () {
            
            this.getNews();
            
        }.bind(this), refreshRate); 
    }

    stopAutoRefreshTimer = () => {

       clearInterval(this.interval);
    }

    getNews = (pageNumber = 1, activeDashboard = this.props.activeDashboard) => {
        
        const params = {
            time: moment().subtract(7, 'days').utc().format('Y-MM-DD HH:mm:ss'),
            page: pageNumber || 1
        }; 

        if(this.props.user.stripe_id) {
            params.time = moment().subtract(30, 'days').utc().format('Y-MM-DD HH:mm:ss')
        }

        if(activeDashboard) {            

            if(activeDashboard.keywords) {
                params.keywords = [];
                for(let i = 0; i < activeDashboard.keywords.length; i++) {
                    params.keywords.push(activeDashboard.keywords[i].keyword);
                }
            }

            if(activeDashboard.sources && activeDashboard.sources.length) {
                params.sources = [];
                for(let i = 0; i < activeDashboard.sources.length; i++) {
                    params.sources.push(activeDashboard.sources[i].id);
                }
            }
        }
        console.log('activeDashboard', activeDashboard);
        
        
        this.props.getNews(params);        
    }

    dashboardUpdate = () => {        
        this.closeMenu();
        this.setActiveDashboard(this.props.activeDashboard);
    }

    updateNews = (pageNumber) => {
    
        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss'),
            page: pageNumber || 1
        }; 
        
        this.props.updateNews(params);        
    }

    getCustomNews = (type, id) => {
    
        const params = {
            time: moment().subtract(7, 'days').utc().format('Y-MM-DD HH:mm:ss'),
            page: 1
        }; 

        params[type] = [id];
        
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

    loadNextPage = () => {
        const page = this.props.current_page + 1;
        
        this.updateNews(page);

        // window.scrollTo(0,0);
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

        this.props.setActiveDashboard(dashboard);  
        this.getNews(1, dashboard);      
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
                        setSearchTerm={this.setSearchTerm}
                        getCustomNews={this.getCustomNews}
                        getAllNews={this.getNews}
                        competitions={this.props.competitions}
                        teams={this.props.teams}
                        players={this.props.players}
                        sources={this.props.sources} />
                    
                    <DashboardSettings
                        setPopularNews={this.props.getPopularNews}
                        setSearchTerm={this.setSearchTerm}
                        isPopularNews={this.props.isPopularNews}
                        setActiveMenuItem={this.setActiveMenuItem}
                        activeMenuItem={activeMenuItem}
                        refreshNews={this.getNews}
                        startAutoRefresh={this.startAutoRefreshTimer}
                        stopAutoRefresh={this.stopAutoRefreshTimer}
                        changeTemplate={this.changeTemplate}/>

                    <Sidebar
                        dashboards={this.props.dashboards}
                        activeDashboard={this.props.activeDashboard}                        
                        setActiveDashboard={this.setActiveDashboard}
                        refreshNews={this.getNews}/>

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
                            keywordsConfig={this.props.keywordsConfig}
                            template={this.state.template} />

                        <Menu
                            isOpen={isMenuOpen}
                            dashboardUpdate={this.dashboardUpdate}
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
    competitions: state.competitions,
    teams: state.teams,
    players: state.players,
    sources: state.sources,
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
    isMenuOpen: state.isMenuOpen,
    keywordsConfig: state.keywordsConfig,
    notificationsEnabled: state.notificationsEnabled
});

const mapDispatchToProps = (dispatch) => ({
    getNews: (params) => dispatch(getNews(params)),
    getCustomNews: (type, id, params) => dispatch(getCustomNews(type, id, params)),
    getCompetitions: () => dispatch(getCompetitions()),
    getTeams: () => dispatch(getTeams()),
    getPlayers: () => dispatch(getPlayers()),
    getSources: () => dispatch(getSources()),
    updateNews: (params) => dispatch(updateNews(params)),
    getPopularNews: () => dispatch(getPopularNews()),
    getDashboards: () => dispatch(getDashboards()),
    setAutoRefresh: (time) => dispatch(setAutoRefresh(time)),
    openMenu: () => dispatch(openMenu()),   
    closeMenu: () => dispatch(closeMenu()),
    setActiveDashboard: (dashboard) => dispatch(setActiveDashboard(dashboard)),
    setActiveMenuItem: (item) => dispatch(setActiveMenuItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);