import React, { Component } from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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
        
        const { email, password } = {email: "admin@test.com", password: "something"};//this.state;
        
        this.props.login(email, password);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                email:
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                </label>
                <label>
                password:
                <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
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
