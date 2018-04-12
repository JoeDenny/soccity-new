import React, { Component } from 'react';
import './styles/add-dashboard.css';
import { connect } from 'react-redux';
import { getCompetitions, getTeams, getPlayers, getSources } from '../actions';
import CustomFilters from '../components/CustomFilters';
import FilterResults from '../components/FilterResults';
import CompetitionList from '../components/CompetitionList';
import TeamList from '../components/TeamList';
import PlayerList from '../components/PlayerList';
import SourceList from '../components/SourceList';
import TwitterFilter from '../components/TwitterFilter';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class AddDashboard extends Component {
    constructor() {
        super();

        this.state = {
            filterResults: []
        }
    }

    componentWillMount() {

        this.props.getCompetitions();
        this.props.getTeams();
        this.props.getPlayers();
        this.props.getSources();
    }

    addToFilter = (filterItem) => {
        
        this.setState({
            filterResults: [
                ...this.state.filterResults,
                filterItem
            ]
        });
    }

    addCustomFilter = (keyword) => {

        const filterItem = {
            name: keyword,
            logo_path: ""
        }        
        
        this.setState({
            filterResults: [
                ...this.state.filterResults,
                filterItem
            ]
        })
    }

    render() {
        const { competitions, teams, players, sources } = this.props;
        
        return (
            <section className="add-dashboard">
                <header>

                    <div className="container">
                        <h1>Add Dashboard</h1>
                        <FilterResults results={this.state.filterResults}/>
                    </div>


                    <Link to={routes.DASHBOARD_PATH}>
                        <button type="button" className="close-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                        </button>
                    </Link>
                </header>

                <section className="container">
                    <h5>Create your own custom filters: </h5>
                    <div className="row">            
                        <CustomFilters addCustomFilter={this.addCustomFilter} />
                    </div>
                </section>

                <section className="container">

                    <h5>Or choose from this list:</h5>

                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <CompetitionList
                                competitions={competitions}
                                filterResults={this.state.filterResults}
                                addToFilter={this.addToFilter} />
                        </div>

                        <div className="col-xs-12 col-md-4">
                            <TeamList
                                teams={teams}
                                addToFilter={this.addToFilter}
                                filterResults={this.state.filterResults} />
                        </div>

                        <div className="col-xs-12 col-md-4">                    
                            <PlayerList
                                players={players}
                                addToFilter={this.addToFilter}
                                filterResults={this.state.filterResults} />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <SourceList sources={sources}/>
                        </div>
                    </div>

                    <TwitterFilter />
                </section>



                <button className="btn btn-primary">Done</button>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    competitions: state.competitions,
    teams: state.teams,
    players: state.players,
    sources: state.sources
});

const mapDispatchToProps = (dispatch) => ({
    getCompetitions: () => dispatch(getCompetitions()),
    getTeams: () => dispatch(getTeams()),
    getPlayers: () => dispatch(getPlayers()),
    getSources: () => dispatch(getSources())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDashboard);