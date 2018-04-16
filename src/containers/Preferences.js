import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthWrapper from '../components/AuthWrapper';
import ErrorMessages from '../components/ErrorMessages';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import UserPhoto from '../components/UserPhoto';
import NotificationsPreferences from '../components/NotificationsPreferences';
import BillingPreferences from '../components/BillingPreferences';
import ManageDashboards from '../components/ManageDashboards';
import { logout, getDashboards, deleteDashboard } from '../actions';
import api from '../api';
import './styles/preferences.css';

class Preferences extends Component {
    constructor() {
        super();

        this.state = {
            headerIsFixed: false,
            default_avatar: 'http://35.176.191.198/images/default_avatars/profile1.png',
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }        
    }

    componentWillMount() {
        this.props.getDashboards();

        this.setState({
            name: this.props.user.name,
            email: this.props.user.email
        })
    }
    
    handleFormChange = (event) => {
        const name = event.target.name;
        
        this.setState({
            ...this.state,
            [name]: event.target.value
          });        
    }

    getDashboards = () => {
        this.props.getDashboards();
    }

    deleteDashboard = (id) => {
        this.props.deleteDashboard(id);
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const formData = this.state;
        console.log('formData', formData);
        
        // this.props.register(formData);
    }

    logout = () => {
        this.props.logout();
        api.destroyToken();                                      
        this.props.history.push('/');
    }

    render() {
        
        return (
            <AuthWrapper>
                 <section className="preferences-page">
                    <header className="app-header">
                        <h1 className="title text-center">Account Preferences</h1>

                        <Link to={routes.DASHBOARD_PATH}>
                            <button type="button" className="close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                            </button>
                        </Link>
                    </header>
                    <div className="container">
                        <div className="profile-section">
                            <p className="pull-right">
                                <Link to={routes.PROFILE_PATH}>View Public Profile</Link>
                            </p>

                            <h3>Your Profile</h3>

                            <div className="details text-center">

                                <UserPhoto size={80} link="http://35.176.191.198/images/default_avatars/profile1.png" />                
                                <ErrorMessages errors={this.props.errors}/>                

                                <div className="auth-layout">
                                    <form onSubmit={this.handleFormSubmit}>

                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Name" type="text" value={this.state.name} name="name" onChange={this.handleFormChange} />
                                        </div>

                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Email" type="text" value={this.state.email} name="email" onChange={this.handleFormChange} />
                                        </div>

                                        {/* <h3>Update Password</h3>
                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Password" type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                                        </div>

                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Confirm password" type="password" value={this.state.password_confirmation} name="password_confirmation" onChange={this.handleChange} />
                                        </div> */}

                                        <input className="btn btn-primary" type="submit" value="Update" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">                
                        <NotificationsPreferences />
                    </div>
                    
                    <div className="container">                
                        <BillingPreferences />
                    </div>

                    <div className="container">                
                        <ManageDashboards dashboards={this.props.dashboards} deleteDashboard={this.deleteDashboard}/>
                    </div>

                    <div className="container">
                        <p className="logout-btn pull-right"
                            onClick={this.logout}>
                            Logout
                        </p>
                    </div>
                </section>
            </AuthWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    dashboards: state.dashboards
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())  ,  
    getDashboards: () => dispatch(getDashboards()), 
    deleteDashboard: (id) => dispatch(deleteDashboard(id))    
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);