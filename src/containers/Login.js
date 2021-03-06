import React, { Component } from 'react';
import './styles/auth.css';
import ErrorMessages from '../components/ErrorMessages';
// import SocialLogin from './SocialLogin';
import { login } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';


class Login extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            email: '',
            password: ''
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    handleChange = (event) => {
        const name = event.target.name;

        this.setState({
            ...this.state,
            [name]: event.target.value
          });        
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = this.state;

        this.props.login(formData);
    }

    render() {
        return (
            <div className="auth-layout">

                <h1>Login</h1>

                <ErrorMessages errors={this.props.errors}/>  

                <div className="social-login">

                    <a href="https://c.sourcebuffet.net/auth/google">
                        <GoogleLoginButton  />   
                    </a>  
                    
                    <a href="https://c.sourcebuffet.net/auth/facebook">
                        <FacebookLoginButton  />   
                    </a>  
                </div>

                <div className="divide"><span>Or</span></div>            
                
                <form onSubmit={this.handleSubmit}>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Email" type="email" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Password" type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>

                    <input className="auth-form-button" type="submit" value="Submit" />
                </form>

                <div className="login-note">
                    <span>Don't have an account?</span>
                    <Link to={routes.REGISTER_PATH}>Sign up</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    errors: state.errors    
});

const mapDispatchToProps = (dispatch) => ({
    login: (formData) => dispatch(login(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
