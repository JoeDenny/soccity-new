import React, { Component } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import AuthWrapper from '../components/AuthWrapper';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import CommentsContainer from '../components/CommentsContainer';
import DashboardSettings from '../components/DashboardSettings';
import api from '../api.js';
import './styles/dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            allNews: [],
            isChatVisible: false
        }
    }

    componentWillMount() {

        api.getAllNews().then(res => {
            const allNews = res.data.allNews.data;
            this.setState({
                ...this.state,
                allNews
            });                                            
        })        
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
                            allNews={this.state.allNews}
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

export default Dashboard;