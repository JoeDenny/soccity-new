import React, { Component } from 'react';
import './styles/add-dashboard.css';
import Search from '../components/Search';
import FilterResults from '../components/FilterResults';
import TeamList from '../components/TeamList';
import SourceList from '../components/SourceList';
import TwitterFilter from '../components/TwitterFilter';
import api from '../api.js';

class AddDashboard extends Component {
    constructor() {
        super();

        this.state = {
            teams: [],
            sources: [],
            filterResults: []
        }

        this.addTeamToFilter = this.addTeamToFilter.bind(this);
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

    addTeamToFilter(team) {
        this.setState({
            filterResults: [...this.state.filterResults, team]
        });
    }

    render() {
        return (
            <section className="add-dashboard container">
                <header>
                    <FilterResults results={this.state.filterResults}/>
                </header>
                
                <Search />

                <h3>Or...</h3>

                <div className="row">
                    <TeamList teams={this.state.teams} addTeamToFilter={this.addTeamToFilter}/>
                </div>

                <h3>Then...</h3>

                <div className="row">

                    <SourceList sources={this.state.sources}/>

                    <TwitterFilter />
                </div>

                <button className="btn btn-primary">Done</button>
            </section>
        )
    }
}

export default AddDashboard;