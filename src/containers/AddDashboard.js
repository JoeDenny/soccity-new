import React, { Component } from 'react';
import './styles/add-dashboard.css';
import { connect } from 'react-redux';
import { getCompetitions, getTeams, getPlayers, getSources, addDashboard } from '../actions';
import AuthWrapper from '../components/AuthWrapper';
import CompetitionList from '../components/CompetitionList';
import TeamList from '../components/TeamList';
import PlayerList from '../components/PlayerList';
import SourceList from '../components/SourceList';
import TwitterFilter from '../components/TwitterFilter';
import ErrorMessages from '../components/ErrorMessages';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class AddDashboard extends Component {
    constructor() {
        super();

        this.state = {
            source_type: '',
            sources: [],
            competitions: [],
            teams: [],
            players: []
        }

        this.keywords = [];
    }

    componentWillMount() {

        this.props.getCompetitions();
        this.props.getTeams();
        this.props.getPlayers();
        this.props.getSources();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.updateDashboardSuccess) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    addToFilter = (type, item) => {
        
        this.setState({
            [type]: [
                ...this.state[type],
                item
            ]
        });        
    }

    addSourceType = (showTweets) => {
        this.setState({
            source_type: showTweets ? 'twitter' : 'rss'
        })
    }

    removeFromFilter = (type, filterItem) => {

        let filterArray = this.state[type];        

        let index = filterArray.indexOf(filterItem);

        filterArray.splice(index, 1);
        
        this.setState({
            [type]: filterArray
        });  
    }

    addDashboard = () => {

        const params = {
            name:  'default dashboard',
            sources: this.state.sources,
            source_type: this.state.source_type,
            teams: this.state.teams,
            players: this.state.players,
            competitions: this.state.competitions
        }
        
        this.props.addDashboard(params);        
    }

    render() {
        const { competitions, teams, players } = this.props;
        
        return (
            <AuthWrapper>
                <section className="add-dashboard">
                    <header className="app-header">

                        <div className="container">
                            <h1 className="title text-center">Create Dashboard</h1>
                            <Link to={routes.DASHBOARD_PATH}>
                                <button type="button" className="close-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                                </button>
                            </Link>
                        </div>
                    </header>

                    <section className="container">

                        {/* <FilterResults results={this.state.filterResults}/> */}
                        
                        {/* <h4>Create your own custom filters: </h4>
                        <div className="row">            
                            <CustomFilters addCustomFilter={this.addCustomFilter} />
                        </div> */}
                    </section>

                    <section className="container">

                        {/* <h4>Or choose from this list:</h4> */}

                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <CompetitionList
                                    competitions={competitions}
                                    filterResults={this.state.competitions}
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter} />
                            </div>

                            <div className="col-xs-12 col-md-4">
                                <TeamList
                                    teams={teams}
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter}
                                    filterResults={this.state.teams} />
                            </div>

                            <div className="col-xs-12 col-md-4">                    
                                <PlayerList
                                    players={players}
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter}
                                    filterResults={this.state.players} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <SourceList
                                    sources={this.props.sources} 
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter}/>
                            </div>
                            <div className="col-xs-12 col-md-6">

                                <TwitterFilter addSourceType={this.addSourceType} />
                            </div>
                        </div>

                        <ErrorMessages errors={this.props.errors} />

                        <div className="text-center">
                            <button className="btn btn-primary"
                                    onClick={this.addDashboard}>Save Dashboard</button>

                        </div>

                    </section>

                </section>
            </AuthWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    competitions: state.competitions,
    teams: state.teams,
    players: state.players,
    sources: state.sources,
    errors: state.addDashboardErrors,
    updateDashboardSuccess: state.updateDashboardSuccess
});

const mapDispatchToProps = (dispatch) => ({
    getCompetitions: () => dispatch(getCompetitions()),
    getTeams: () => dispatch(getTeams()),
    getPlayers: () => dispatch(getPlayers()),
    getSources: () => dispatch(getSources()),
    addDashboard: (params) => dispatch(addDashboard(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDashboard);