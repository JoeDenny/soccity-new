import React, { Component } from 'react';
import './styles/auth.css';
import { register } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import AvatarInput from '../components/AvatarInput';

class Register extends Component {
    constructor(props) {
        super(props);
        // this.form = undefined;        
        this.state = {
            avatar: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        // this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    // handleImageUpload = (title) => {
    //     return (value) => {
    //         this.setState({
    //             ...this.state,
    //             [title]: value
    //         });  
    //     };
    // }

    handleChange(event) {
        const name = event.target.name;
        
        this.setState({
            ...this.state,
            [name]: event.target.value
          });        
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        // const formData = new FormData(this.form);
        const formData = this.state;

        console.log('formdata', formData);
        
        
        // this.props.register(formData);
    }

    onRef = (el) => {
        
        this.form = el;
    }

    render() {
        return (
            <div className="auth-layout">
                <form onSubmit={this.handleSubmit} ref={this.onRef}>

                    <div className="input-wrapper">
                        <AvatarInput onChange={this.handleImageUpload}/>
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Username" type="text" value={this.state.username} name="username" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Email" type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Password" type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="Confirm password" type="password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange} />
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
    token: state.token
});

const mapDispatchToProps = (dispatch) => ({
    register: (formData) => dispatch(register(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
