import React, { Component } from 'react';

class AddSource extends Component {
    constructor() {
        super();

        this.state = {
            newSource: {}
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            newSource: {
                news: this.refs.news.value
            }
        }, function() {
            console.log('this.state', this.state);
            
        });
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>news source</label>
                <input type='text' ref='news' />
                <label>twitter source</label>
                <input type='text' ref='twitter' />

                <button type="submit">submit</button>
            </form>
        )
    }
}

export default AddSource;