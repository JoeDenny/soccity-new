import React, { Component } from 'react';
import './styles/add-dashboard.css';
import Search from '../components/Search';
import FilterResults from '../components/FilterResults';
import TeamList from '../components/TeamList';
import SourceList from '../components/SourceList';
import TwitterFilter from '../components/TwitterFilter';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
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
                    <Link to={routes.DASHBOARD_PATH}>
                        <button type="button" className="close-icon" onClick={this.onCloseComments}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                        </button>
                    </Link>
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