import React, { Component } from 'react';
import './styles/add-dashboard.css';
import Search from '../components/Search';
import FilterResults from '../components/FilterResults';
import TeamList from '../components/TeamList';
import SourceList from '../components/SourceList';
import api from '../api.js';

class AddDashboard extends Component {
    constructor() {
        super();

        this.state = {
            teams: [],
            sources: []
        }
    }

    componentWillMount() {

        api.getTeams().then(res => {            
            const teams = res.data.data;
            this.setState({ teams });                                            
        });

        api.getSources().then(res => {            
            const sources = res.data.data;
            this.setState({ sources });                                            
            
        });
    }

    render() {
        return (
            <section className="add-dashboard container">
                <header>
                    <FilterResults />
                </header>

                <Search />

                <h3>Or...</h3>
                
                <TeamList teams={this.state.teams}/>

                <h3>Then...</h3>

                <SourceList sources={this.state.sources}/>

                {/* <TwitterFilter /> */}

            </section>
        )
    }
}

export default AddDashboard;