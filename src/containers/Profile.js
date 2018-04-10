import React, { Component } from 'react';
// import AvatarInput from './AvatarInput';
import './styles/profile.css';
import { connect } from 'react-redux';
import UserActivity from '../components/UserActivity';
import UserPhoto from '../components/UserPhoto';
import { getUserActivity } from '../actions';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            user: {},
            activity: undefined
        }
    }

    componentWillMount() {
        this.props.getUserActivity();

        // api.getUserActivity().then(res => {
            
        //     const activity = res.data.activity.data;

        //     this.setState({
        //         ...this.state,
        //         activity
        //     });                                     
        // })     
        
        
    }

    render() {
        const { user, activity } = this.props;
        
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

                <UserActivity activity={activity}/>

            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    activity: state.activity
});

const mapDispatchToProps = (dispatch) => ({
    getUserActivity: () => dispatch(getUserActivity())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);