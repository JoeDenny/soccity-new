import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader';
import AuthWrapper from '../components/AuthWrapper';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import { getNews } from '../actions';
import CommentsContainer from '../components/CommentsContainer';
import FilterContainer from '../components/FilterContainer';
import DashboardSettings from '../components/DashboardSettings';
import './styles/dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            template: 1,
            isCommentsOpen: false,
            isFilterOpen: false,
            searchTerm: '',
            showBookmarkedArticles: false
        }        
    }

    componentWillMount() {
        this.getNews();
    }

    getNews = (pageNumber) => {
        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss'),
            page: pageNumber || 1
        }; 
        
        this.props.getNews(params);        
    }

    showBookmarkedArticles = () => {
        this.setState({
            showBookmarkedArticles: !this.state.showBookmarkedArticles
        })
    }

    showAllArticles = () => {
        this.setState({
            showBookmarkedArticles: false
        })
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

    openComments = () => {        
        this.setState({
            ...this.state,
            isCommentsOpen: true,
            isFilterOpen: false
        });        
    }

    closeComments = () => {
        this.setState({
            ...this.state,
            isCommentsOpen: false
        });
    }

    openFilter = () => {
        this.setState({
            ...this.state,
            isCommentsOpen: false,            
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
        const pageNumber = this.props.current_page + 1;        

        this.getNews(pageNumber);

        window.scrollTo(0,0);
    }

    setSearchTerm = (searchTerm) => {

        this.setState({
            ...this.state,
            searchTerm: searchTerm
        })
    }

    render() {
        const { user, news, current_page, last_page } = this.props;

        const sidebarOpenClass = this.state.isCommentsOpen || this.state.isFilterOpen ? 'sidebar-open' : 'sidebar-closed';

        const overlayClassName = `overlay ${this.state.isCommentsOpen ? 'open' : ''}`;
    
        return (
            <AuthWrapper>
                <section className="app-dashboard">

                    <DashboardHeader
                        user={user}
                        setSearchTerm={this.setSearchTerm}/>
                    
                    <DashboardSettings
                        showBookmarkedArticles={this.showBookmarkedArticles}
                        refreshNews={this.getNews}
                        changeTemplate={this.changeTemplate}
                        openFilter={this.openFilter}/>

                    <Sidebar />

                    <div className={sidebarOpenClass}>

                        <NewsFeed
                            className={sidebarOpenClass}
                            news={news}
                            isFetching={this.props.isFetching}
                            showBookmarkedArticles={this.state.showBookmarkedArticles}
                            showAllArticles={this.showAllArticles}
                            current_page={current_page}
                            last_page={last_page}
                            onOpenComments={this.openComments}
                            loadNextPage={this.loadNextPage}
                            searchTerm={this.state.searchTerm}
                            template={this.state.template} />

                        <CommentsContainer
                            isVisible={this.state.isCommentsOpen}
                            onCloseComments={this.closeComments} />
                        
                        <FilterContainer                      
                            isVisible={this.state.isFilterOpen}
                            onCloseFilter={this.closeFilter} />
                    </div>


                    <div className={overlayClassName}
                        onClick={this.closeComments}></div>
                </section>
            </AuthWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    news: state.news,
    current_page: state.current_page,
    last_page: state.last_page,
    isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    getNews: (params) => dispatch(getNews(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);