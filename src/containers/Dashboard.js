import React, { Component } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import api from '../api.js';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            allNews: [],
            user: {}
        }
    }

    componentWillMount() {

        api.getAllNews().then(res => {
            const allNews = res.data.allNews.data;
            this.setState({ allNews });                                            
        })
    }

    render() {
        return (
            <section className="app-dashboard">

                <DashboardHeader />
                
                <Sidebar />

                <NewsFeed allNews={this.state.allNews}/>
            </section>
        )
    }
}

export default Dashboard;