import React, { Component } from 'react';
import AvatarInput from './AvatarInput';
import './styles/profile.css';
import store from '../store';
import UserHistory from '../components/UserHistory';
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
            console.log('history', history);                                      
        })     
    }

    render() {
        const user = this.state.user;
        
        return (
            <section className="profile-page">
                <div className="profile-card text-center">
                    <AvatarInput />

                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                </div>

                <UserHistory history={this.state.history}/>
            </section>
        )
    }
}

export default Profile;