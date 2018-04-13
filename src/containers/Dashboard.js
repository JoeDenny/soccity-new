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
            isChatVisible: false,
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
            isChatVisible: !this.state.isChatVisible
        });        
    }

    loadNextPage = () => {
        const pageNumber = this.props.current_page + 1;        

        this.getNews(pageNumber);
    }

    closeComments = () => {
        this.setState({
            ...this.state,
            isChatVisible: false
        });
    }

    filterArticles = (searchTerm) => {
        this.setState({
            searchTerm
        });
    }

    render() {
        const { user, current_page, last_page } = this.props;        

        let news = this.props.news;

        const chatOpenClass = this.state.isChatVisible ? 'chat-open' : 'chat-closed';
        const overlayClassName = `overlay ${this.state.isChatVisible ? 'open' : ''}`;

        let filteredNews;

        if(news) {
            
            filteredNews = this.props.news.filter((news) => {
                                
                return news.title.toLowerCase().includes(this.state.searchTerm);
            });
        }

        // if(filteredNews && filteredNews.length) {
        //     news = filteredNews;
        // } else {
        //     news = this.props.news;
        // }
    
        return (
            <AuthWrapper>
                <section className="app-dashboard">

                    <DashboardHeader
                        user={user}
                        filterArticles={this.filterArticles}/>
                    
                    <DashboardSettings />

                    <Sidebar />

                    <div className={chatOpenClass}>

                        <NewsFeed
                            news={filteredNews}
                            current_page={current_page}
                            last_page={last_page}
                            onOpenComments={this.openComments}
                            loadNextPage={this.loadNextPage} />

                        <CommentsContainer
                            isVisible={this.state.isChatVisible}
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