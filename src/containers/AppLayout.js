import React, { Component } from 'react';
import Header from '../components/Header';
import SourceList from '../components/SourceList';
import AddSource from '../components/AddSource';

class AppLayout extends Component {
    constructor() {
        super();

        this.state = {
            user: {},
            sources: []
        }
    }

    componentWillMount() {
        this.setState({
            sources: [
                {
                    news: 'The Sun',
                    twitter: 'mytwitterhandle'
                },
                {
                    news: 'Daily Mail',
                    twitter: 'otherTwitterUser'
                }
            ]
        })
    }

    render() {
        return (
            <div className="container">
                <Header user={this.state.user} />

                <SourceList sources={this.state.sources} />

                <AddSource />
            </div>
        )
    }
}

export default AppLayout;