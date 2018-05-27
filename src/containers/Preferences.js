import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthWrapper from '../components/AuthWrapper';
import AvatarInput from '../components/AvatarInput';
import ErrorMessages from '../components/ErrorMessages';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import Notification from '../components/Notification';
// import UserPhoto from '../components/UserPhoto';
import NotificationsPreferences from '../components/NotificationsPreferences';
import BillingPreferences from '../components/BillingPreferences';
import ManageDashboards from '../components/ManageDashboards';
import { logout, updateUserDetails, getDashboards, deleteDashboard, getStripeConfig, enableNotifications } from '../actions';
import api from '../api';
import './styles/preferences.css';

class Preferences extends Component {
    constructor() {
        super();
        this.form = undefined;
        this.state = {
            headerIsFixed: false,
            avatar: undefined,
            default_avatar: '',
            name: '',
            email: '',
            old_password: '',
            password: '',
            password_confirmation: ''
        }  
    }
    
    componentWillMount() {

        this.props.getDashboards();

        this.props.getStripeConfig();
        
        this.setState({
            name: this.props.user.name,
            email: this.props.user.email
        })        
    }

    componentWillReceiveProps(newProps) {

        if(newProps.updateUserSuccess) {
            this.setState({
                name: newProps.user.name,
                email: newProps.user.email,
                old_password: '',
                password: '',
                password_confirmation: ''
            })
        }
    }
    
    handleFormChange = (event) => {
        const name = event.target.name;
        
        this.setState({
            ...this.state,
            [name]: event.target.value
          });        
    }

    handleDefaultAvatarUpload = (avatarSrc) => {

        this.setState({
            ...this.state,
            default_avatar: avatarSrc
        }); 
    }

    handleImageUpload = (image) => {

        this.setState({
            ...this.state,
            avatar: image
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

        let formData = {
            name: this.state.name,
            email: this.state.email
        };

        if(this.state.default_avatar.length) {
            formData.default_avatar =this.state.default_avatar;
        }

        if(this.state.old_password.length) {
            formData.old_password = this.state.old_password;
            formData.password = this.state.password;
            formData.password_confirmation = this.state.password_confirmation;
        }

        if(this.state.avatar) {

            let data = new FormData(formData);
    
            data.append('avatar', this.state.avatar);  
            
            formData = data;
        }

        this.props.updateUserDetails(formData);
    }

    logout = () => {
        this.props.logout();
        api.destroyToken();                                      
        this.props.history.push('/');
    }

    render() {
        let successfulUpdateclass = `update-success-message ${this.props.updateUserSuccess ? '' : 'hide'}`

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

                                <AvatarInput
                                    name="avatar"
                                    user={this.props.user}
                                    handleDefaultAvatarUpload={this.handleDefaultAvatarUpload}
                                    handleImageUpload={this.handleImageUpload} />

                                <div className="auth-layout">

                                    <ErrorMessages errors={this.props.errors}/>     

                                    <p className={successfulUpdateclass}>Update Successful!</p>

                                    <form onSubmit={this.handleFormSubmit}>

                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Name" type="text" value={this.state.name} name="name" onChange={this.handleFormChange} />
                                        </div>

                                        <div className="input-wrapper">
                                            <p className="text-input protected">{this.state.email}</p>
                                        </div>

                                        <h3>Update Password</h3>
                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Current Password" type="password" value={this.state.old_password} name="old_password" onChange={this.handleFormChange} />
                                        </div>

                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Password" type="password" value={this.state.password} name="password" onChange={this.handleFormChange} />
                                        </div>

                                        <div className="input-wrapper">
                                            <input className="text-input" placeholder="Confirm password" type="password" value={this.state.password_confirmation} name="password_confirmation" onChange={this.handleFormChange} />
                                        </div>

                                        <input className="btn btn-primary" type="submit" value="Update" />                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">                
                        <NotificationsPreferences enableNotifications={this.props.enableNotifications}/>
                        <Notification notificationsEnabled={this.props.notificationsEnabled} user={this.props.user}/>
                    </div>
                    
                    <div className="container">                
                        <BillingPreferences stripeConfig={this.props.stripeConfig} />
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
    stripeConfig: state.stripeConfig,
    loading: state.loading,
    dashboards: state.dashboards,
    errors: state.errors,
    updateUserSuccess: state.updateUserSuccess,
    notificationsEnabled: state.notificationsEnabled
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    getStripeConfig: () => dispatch(getStripeConfig()),      
    getDashboards: () => dispatch(getDashboards()), 
    deleteDashboard: (id) => dispatch(deleteDashboard(id)),
    updateUserDetails: (formData) => dispatch(updateUserDetails(formData)),
    enableNotifications: () => dispatch(enableNotifications())
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);