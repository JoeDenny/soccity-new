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
            isCommentsOpen: false,
            isFilterOpen: false,
            searchTerm: ''
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
            isFilterOpen: true
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
                        refreshNews={this.getNews}
                        openFilter={this.openFilter}/>

                    <Sidebar />

                    <div className={sidebarOpenClass}>

                        <NewsFeed
                            className={sidebarOpenClass}
                            news={news}
                            current_page={current_page}
                            last_page={last_page}
                            onOpenComments={this.openComments}
                            loadNextPage={this.loadNextPage}
                            searchTerm={this.state.searchTerm} />

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
    last_page: state.last_page
});

const mapDispatchToProps = (dispatch) => ({
    getNews: (params) => dispatch(getNews(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);