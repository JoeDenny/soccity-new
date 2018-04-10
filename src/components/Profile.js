import React, { Component } from 'react';
// import AvatarInput from './AvatarInput';
import './styles/profile.css';
import store from '../store';
import UserHistory from '../components/UserHistory';
import UserPhoto from './UserPhoto';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import api from '../api.js';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            user: {},
            history: undefined
        }
    }

    componentWillMount() {
        const user = store.getState().user;
        
        this.setState({ user });    
        
        api.getUserHistory().then(res => {
            const history = res.data.allNews.data;
            this.setState({
                ...this.state,
                history
            });                                     
        })     
    }

    render() {
        const user = this.state.user;
        
        return (
            <section className="profile-page">
                <div className="profile-card">

                    <p>
                        <Link className="text-secondary" to={routes.DASHBOARD_PATH}><span>&lt;</span> Back to your dashboard.</Link>                
                    </p>
                    <div className="details text-center">
                        <UserPhoto size={80} link="http://35.176.191.198/images/default_avatars/profile1.png" />

                        <h2>{user.name}</h2>
                        <h2>{user.email}</h2>
                    </div>
                </div>

                <UserHistory history={this.state.history}/>
            </section>
        )
    }
}

export default Profile;