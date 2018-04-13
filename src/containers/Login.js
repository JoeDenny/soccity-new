import React, { Component } from 'react';
import './styles/auth.css';
import { login } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class Login extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState({
            ...this.state,
            [name]: event.target.value
          });        
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        const { email, password } = this.state;
        
        this.props.login(email, password);
    }

    render() {
        return (
            <div className="auth-layout">
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
    token: state.token
});

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));