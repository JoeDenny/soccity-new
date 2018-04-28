import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomTwitterAccount } from '../actions';
import ErrorMessages from './ErrorMessages';
import './styles/custom-twitter.css';

class AddCustomTwitter extends Component {
    constructor() {
        super();

        this.state = {
            type: 'twitter',
            name: ''
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
        
        const {name} = this.state;
        const type = 'twitter';
        
        this.props.addCustomTwitterAccount(type, name);
    }

    render() {

        return (
            <div className="custom-twitter auth-layout">
                
                <h2>Add custom twitter accounts</h2>

                <ErrorMessages errors={this.props.errors}/>     

                <form onSubmit={this.handleSubmit}>
                    {/* <div className="input-wrapper">
                        <input className="text-input" placeholder="hashtag or screen name" type="text" value={this.state.type} name="type" onChange={this.handleChange} />
                    </div> */}

                    <div className="input-wrapper">
                        <input className="text-input" placeholder="valid twitter screen_name or hashtag starts with #" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>

                    <input className="auth-form-button" type="submit" value="Add Twitter Account" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    addCustomTwitterAccount: (type, name) => dispatch(addCustomTwitterAccount(type, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomTwitter);