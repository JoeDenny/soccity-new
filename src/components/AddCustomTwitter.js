import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomTwitterAccount } from '../actions';
import './styles/custom-twitter.css';

class AddCustomTwitter extends Component {
    constructor() {
        super();

        this.state = {
            type: '',
            name: '',
            hideSource: false
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
    
        let type, name;

        if(this.state.type === '#') {
            type = 'hashtag';
        } else {
            type = 'screen_name'
        }

        name = this.state.name;
        
        this.props.addCustomTwitterAccount(type, name);
    }

    removeSource = () => {
        this.setState({
            hideSource: true
        })
    }

    render() {
        let twitterSources;

        if(this.props.twitterSources) {
            let className = this.state.hideSource ? 'hide': ''
            twitterSources = (
                <p className={"twitter-source " + className}>{this.props.twitterSources.link} <span onClick={this.removeSource}>x</span></p>
            )
        }
    
        return (
            <div className="custom-twitter">
                
                <h3 className="sub-title">Add Custom Twitter Feed</h3>

                <form onSubmit={this.handleSubmit}>

                    <div className="input-wrapper inline-input">
                        <label className="form-label"></label>
                        <input className="text-input square" placeholder="@ or #" type="text" value={this.state.type} name="type" onChange={this.handleChange} />
                        <input className="text-input" placeholder="user name or twitter feed" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add" />
                </form>

                {twitterSources}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    twitterSources: state.twitterSources
});

const mapDispatchToProps = (dispatch) => ({
    addCustomTwitterAccount: (type, name) => dispatch(addCustomTwitterAccount(type, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomTwitter);