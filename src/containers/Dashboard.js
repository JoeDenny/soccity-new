import React, { Component } from 'react';
import DashboardHeader from '../components/DashboardHeader';
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

        const overlayClassName = `overlay ${this.state.isChatVisible ? 'open' : ''}`;
        
        return (
            <section className="app-dashboard">

                <DashboardHeader />
                
                <DashboardSettings />

                <Sidebar />

                <NewsFeed
                    allNews={this.state.allNews}
                    onOpenComments={this.openComments}/>

                <CommentsContainer
                    isVisible={this.state.isChatVisible}
                    onCloseComments={this.closeComments} />


                <div className={overlayClassName}
                    onClick={this.closeComments}></div>
            </section>
        )
    }
}

export default Dashboard;