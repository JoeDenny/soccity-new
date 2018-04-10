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
            news: [],
            isChatVisible: false
        }
    }

    componentWillMount() {

        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss')
        }; 

        this.props.getNews(params);
    }

    openComments = () => {
        this.setState({
            ...this.state,
            isChatVisible: !this.state.isChatVisible
        });        
    }

    closeComments = () => {
        this.setState({
            ...this.state,
            isChatVisible: false
        });
    }

    render() {
        const { news } = this.props;

        const chatOpenClass = this.state.isChatVisible ? 'chat-open' : 'chat-closed';
        const overlayClassName = `overlay ${this.state.isChatVisible ? 'open' : ''}`;
    
        return (
            <AuthWrapper>
                <section className="app-dashboard">

                    <DashboardHeader />
                    
                    <DashboardSettings />

                    <Sidebar />

                    <div className={chatOpenClass}>

                        <NewsFeed
                            news={news}
                            onOpenComments={this.openComments}/>

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
    news: state.news
});

const mapDispatchToProps = (dispatch) => ({
    getNews: (params) => dispatch(getNews(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);