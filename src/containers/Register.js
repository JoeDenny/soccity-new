import React, { Component } from 'react';
import './styles/auth.css';
import ErrorMessages from '../components/ErrorMessages';
import { register } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Register extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            default_avatar: 'http://35.176.191.198/images/default_avatars/profile1.png',
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    componentWillReceiveProps(newProps) {
        
        if (newProps.token && !newProps.user.anonymous) {
            this.props.history.push(routes.BILLING_PATH);
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
        
        if(this.props.user.anonymous) {            
            this.setState({anonymous: this.props.user.anonymous})
        }

        const formData = this.state;

    
        this.props.register(formData);
    }

    render() {
        return (
            <div className="auth-layout">
                
                <h1>Create Account</h1>

                <ErrorMessages errors={this.props.errors}/>                

                <form onSubmit={this.handleSubmit}>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Name" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Email" type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Password" type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Confirm password" type="password" value={this.state.password_confirmation} name="password_confirmation" onChange={this.handleChange} />
                    </div>

                    <input className="auth-form-button" type="submit" value="Submit" />
                </form>

                <div className="login-note">
                    <span>Already have an account?</span>
                    <Link to={routes.LOGIN_PATH}>Login</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    token: state.token,
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    register: (formData) => dispatch(register(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
