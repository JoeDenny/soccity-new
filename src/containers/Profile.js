import React, { Component } from 'react';
// import AvatarInput from './AvatarInput';
import './styles/profile.css';
import { connect } from 'react-redux';
import UserActivity from '../components/UserActivity';
import FollowingActivity from '../components/FollowingActivity';
import UserPhoto from '../components/UserPhoto';
import AuthWrapper from '../components/AuthWrapper';
import { getUserActivity, getFollowers, getFollowings, logout } from '../actions';
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
        this.props.getFollowers();        
        this.props.getFollowings();        
    }

    render() {
        const { user, activity } = this.props;
        
        return (
            <AuthWrapper>
                <section className="profile-page">
                    <div className="profile-card">
                        <p>
                            <Link className="text-secondary" to={routes.PREFERENCES_PATH}><span>&lt;</span> Back to preferences.</Link>                
                        </p>
                        <div className="details text-center">
                            <UserPhoto size={80} link="http://35.176.191.198/images/default_avatars/profile1.png" />

                            <h2>{user.name}</h2>
                            <h2>{user.email}</h2>
                        </div>
                    </div>

                    <FollowingActivity />

                    <UserActivity activity={activity}/>

                </section>
            </AuthWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    activity: state.activity
});

const mapDispatchToProps = (dispatch) => ({
    getUserActivity: () => dispatch(getUserActivity()),
    getFollowers: () => dispatch(getFollowers()),
    getFollowings: () => dispatch(getFollowings()),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);