import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomTwitterAccount } from '../actions';
import './styles/custom-twitter.css';

class AddCustomTwitter extends Component {
    constructor() {
        super();

        this.state = {
            type: '',
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
        
        const {type, name} = this.state;
        
        this.props.addCustomTwitterAccount(type, name);
    }

    render() {

        return (
            <div className="custom-twitter">
                
                <h3 className="sub-title">Add Custom Twitter Feed</h3>

                <form onSubmit={this.handleSubmit}>

                    <div className="input-wrapper inline-input">
                        <label className="form-label"></label>
                        <input className="text-input square" placeholder="# or @" type="text" value={this.state.type} name="type" onChange={this.handleChange} />
                        <input className="text-input" placeholder="twitter feed or user name" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add" />
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