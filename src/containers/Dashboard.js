import React, { Component } from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import DashboardHeader from '../components/DashboardHeader';
import AuthWrapper from '../components/AuthWrapper';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import { getNews } from '../actions';
import CommentsContainer from '../components/CommentsContainer';
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

        console.log('getnews');
        
    }

    openComments = () => {        
        this.setState({
            ...this.state,
            isCommentsOpen: true
        });        
    }

    closeComments = () => {
        this.setState({
            ...this.state,
            isCommentsOpen: false
        });
    }

    loadNextPage = () => {
        const pageNumber = this.props.current_page + 1;        

        this.getNews(pageNumber);
    }

    setSearchTerm = (searchTerm) => {

        this.setState({
            ...this.state,
            searchTerm: searchTerm
        })
    }

    render() {
        const { user, news, current_page, last_page } = this.props;

        const commentsOpenClass = this.state.isCommentsOpen ? 'sidebar-open' : 'sidebar-closed';
        const overlayClassName = `overlay ${this.state.isCommentsOpen ? 'open' : ''}`;
    
        return (
            <AuthWrapper>
                <section className="app-dashboard">

                    <DashboardHeader
                        user={user}
                        setSearchTerm={this.setSearchTerm}/>
                    
                    <DashboardSettings refreshNews={this.getNews}/>

                    <Sidebar />

                    <div className={commentsOpenClass}>

                        <NewsFeed
                            news={news}
                            current_page={current_page}
                            last_page={last_page}
                            onOpenComments={this.openComments}
                            loadNextPage={this.loadNextPage}
                            searchTerm={this.state.searchTerm} />

                        <CommentsContainer
                            isVisible={this.state.isCommentsOpen}
                            onCloseComments={this.closeComments} />
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