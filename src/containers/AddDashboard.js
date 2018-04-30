import React, { Component } from 'react';
import './styles/add-dashboard.css';
import { connect } from 'react-redux';
import { getCompetitions, getTeams, getPlayers, getSources, addDashboard } from '../actions';
import AuthWrapper from '../components/AuthWrapper';
import AddCustomTwitter from '../components/AddCustomTwitter';
import CompetitionList from '../components/CompetitionList';
import TeamList from '../components/TeamList';
import PlayerList from '../components/PlayerList';
import SourceList from '../components/SourceList';
import SourceTypeList from '../components/SourceTypeList';
import FilterResults from '../components/FilterResults';
import CustomFilters from '../components/CustomFilters';
import TwitterFilter from '../components/TwitterFilter';
import ErrorMessages from '../components/ErrorMessages';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class AddDashboard extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            keywords: '',
            source_type: '',
            sources: [],
            teams: [],
            players: [],
            competitions: [],
            preferences: [],
            competitionId: undefined,
            teamId: undefined
        }
        
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

    handleChange = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
          });        
    }

    addToFilter = (type, item) => {
        
        this.setState({
            [type]: [
                ...this.state[type],
                item
            ]
        });        
    }

    addCustomFilter = (keyword) => {

        keyword = keyword.toLowerCase();
        
        if(!this.state.keywords.includes(keyword)) {
            this.setState({
                keywords: [
                    ...this.state.keywords,
                    keyword
                ]
            })            
        }
        
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

        const keywords = this.state.keywords.join();
        
        const params = {
            name:  this.state.name,
            keywords: keywords,
            sources: this.state.sources,
            source_type: this.state.source_type,
            teams: this.state.teams,
            players: this.state.players,
            competitions: this.state.competitions
        }
        
        this.props.addDashboard(params);        
    }

    setActiveCatergory = (category, id) => {
        this.setState({
            ...this.state,
            [category]: id
        });
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

                    <section className="container content">

                        <div className="input-wrapper">
                            <h4 className="label">Dashboard Name</h4>
                            <input className="text-input" placeholder="e.g. Arsenal" type="test" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>

                        <div className="custom-filters">

                            <div>
                                <h4 className="label">Add keywords to filter: </h4>        
                                <CustomFilters addCustomFilter={this.addCustomFilter} />
                            </div>

                            <FilterResults results={this.state.keywords}/>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <CompetitionList
                                    competitions={competitions}
                                    setActiveCatergory={this.setActiveCatergory}
                                    filterResults={this.state.competitions}
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter} />
                            </div>

                            <div className="col-xs-12 col-md-4">
                                <TeamList
                                    teams={teams}
                                    competitionId={this.state.competitionId}
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter}
                                    filterResults={this.state.teams} />
                            </div>

                            <div className="col-xs-12 col-md-4">                    
                                <PlayerList
                                    players={players}
                                    teamId={this.state.teamId}
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter}
                                    filterResults={this.state.players} />
                            </div>
                        </div>
                        
                        <div className="row sources">
                            <div className="col-xs-12 col-md-6">
                                <SourceList
                                    sources={this.props.sources} 
                                    addToFilter={this.addToFilter}
                                    removeFromFilter={this.removeFromFilter}
                                    filterResults={this.state.sources} />
                                    
                            </div>
                            <div className="col-xs-12 col-md-6 twitter">

                                <TwitterFilter addSourceType={this.addSourceType} />

                                <AddCustomTwitter /> 
                                
                            </div>
                        </div>

                        <SourceTypeList />


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