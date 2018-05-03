import React, { Component } from 'react';
import './styles/add-dashboard1.css';
import { connect } from 'react-redux';
import { getCompetitions, getTeams, getPlayers, getSources, addDashboard } from '../actions';
import AuthWrapper from '../components/AuthWrapper';
import AddCustomTwitter from '../components/AddCustomTwitter';
import CompetitionList from '../components/CompetitionList';
import TeamList from '../components/TeamList';
import PlayerList from '../components/PlayerList';
import SourceList from '../components/SourceList';
import SourceTypeList from '../components/SourceTypeList';
import PresetFilterList from '../components/PresetFilterList';
import FilterResults from '../components/FilterResults';
import CustomFilters from '../components/CustomFilters';
// import TwitterFilter from '../components/TwitterFilter';
import ErrorMessages from '../components/ErrorMessages';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

class AddDashboard extends Component {
    constructor() {
        super();

        this.state = {
            choices: {
                teams: undefined,
                players: undefined,
                competitions: undefined,
                sources: undefined,
                keywords: undefined
            },
            name: '',
            refreshRate: '30',
            source_type: '',
            preferences: [],
            activeFilterList: 'competitions',
            competitionId: '',
            teamId: '',
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

    handleRadioChange = (event) => {
        
        this.setState({
            ...this.state,
            refreshRate: event.target.value
          });        
    }

    addToFilter = (category, item) => { 

        this.setState({
            ...this.state,
            choices: {
                ...this.state.choices,
                [category]: item
            }
        })
    }

    addCustomFilter = (keyword) => {

        keyword = keyword.toLowerCase();
        
        this.setState({
            choices: {
                keywords: keyword
            }
        })            
        // if(!this.state.choices.keywords.includes(keyword)) {            
        // }
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
            name: this.state.name || 'default dashboard',
            source_type: this.state.source_type
        }

        if(this.state.choices.competitions) {
            params.competitions = [this.state.choices.competitions.id]
        } else if(this.state.choices.teams) {
            params.teams = [this.state.choices.teams.id]
        } else if(this.state.choices.players) {
            params.players = [this.state.choices.players.id]
        }

        if(this.state.choices.sources) {
            params.sources = [this.state.choices.sources.id];
        }

        if(this.state.choices.keywords) {
            params.keywords = [this.state.choices.keywords]
        }

        console.log('params: ', params);
        
        this.props.addDashboard(params);        
    }

    setActiveCompetitionId = (id) => {
        this.setState({
            ...this.state,
            activeFilterList: 'teams',
            competitionId: id
        })
    }

    setActiveTeamId = (id) => {
        this.setState({
            ...this.state,
            activeFilterList: 'players',
            teamId: id
        })
    }

    setActiveCategory = (category) => {
        this.setState({
            ...this.state,
            activeFilterList: category
        });
    }

    render() {
        const { competitions, teams, players } = this.props;

        let activeFilterList;
        switch(this.state.activeFilterList) {
            case 'competitions':
                activeFilterList = <CompetitionList
                                        competitions={competitions}
                                        isActive={this.state.activeFilterList === 'competitions'}
                                        setActiveCompetitionId={this.setActiveCompetitionId}
                                        filterResults={this.state.competitions}
                                        addToFilter={this.addToFilter}
                                        removeFromFilter={this.removeFromFilter} />;
                break;
            case 'teams':
                activeFilterList = <TeamList
                                        teams={teams}
                                        isActive={this.state.activeFilterList === 'teams'}
                                        competitionId={this.state.competitionId}
                                        setActiveTeamId={this.setActiveTeamId}
                                        setActiveCategory={this.setActiveCategory}
                                        addToFilter={this.addToFilter}
                                        removeFromFilter={this.removeFromFilter}
                                        filterResults={this.state.teams} />;
                break;
            case 'players':
                activeFilterList = <PlayerList
                                        players={players}
                                        isActive={this.state.activeFilterList === 'players'}
                                        teamId={this.state.teamId}
                                        setActiveCategory={this.setActiveCategory}
                                        addToFilter={this.addToFilter}
                                        removeFromFilter={this.removeFromFilter}
                                        filterResults={this.state.players} />;
                break;
            case 'sources':
                activeFilterList = <SourceList
                                        sources={this.props.sources} 
                                        isActive={this.state.activeFilterList === 'sources'}
                                        addToFilter={this.addToFilter}
                                        removeFromFilter={this.removeFromFilter}
                                        filterResults={this.state.sources} />;
                break;
            default:
                activeFilterList = <CompetitionList
                                        competitions={competitions}
                                        setActiveCategory={this.setActiveCategory}
                                        filterResults={this.state.competitions}
                                        addToFilter={this.addToFilter}
                                        removeFromFilter={this.removeFromFilter} />;
                break;
        }
        
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

                    <section className="content">
                        <div className="add-dashboard-section align-items">
                            <div className="add-dashboard-form">
                                <div className="input-wrapper inline-input">
                                    <label className="form-label label-title">Dashboard Name:</label>
                                    <input className="text-input" placeholder="e.g. Arsenal" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="add-dashboard-instructions">
                                <h3>Step 1</h3>
                                <p>Name your dashboard or leave it blank for an auto-generated name.</p>
                            </div>
                        </div>

                        <div className="add-dashboard-section align-items">
                            <div className="add-dashboard-form">
                                <div className="input-wrapper inline-input">
                                    <label className="form-label label-title">Select auto-refresh rate:</label>
                                    <div className="flex-container">
                                        <div className="input-wrapper inline-input checkbox radio">
                                            <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "30"} value="30"/>
                                            <label className="form-label">30 secs</label>
                                        </div>
                                        <div className="input-wrapper inline-input checkbox radio">
                                            <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "60"} value="60" />
                                            <label className="form-label">1 min</label>
                                        </div>
                                        <div className="input-wrapper inline-input checkbox radio">
                                            <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "120"} value="120"/>
                                            <label className="form-label">2 mins</label>
                                        </div>
                                        <div className="input-wrapper inline-input checkbox radio">
                                            <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "300"} value="300"/>
                                            <label className="form-label">5 mins</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add-dashboard-instructions">
                                <h3>Step 2</h3>
                                <p>Select a refresh rate for how often you'd like your dashboard to auto-update with the latest articles.</p>
                            </div>
                        </div>

                        <div className="add-dashboard-section">
                            <div className="add-dashboard-form">
                                <label className="label-title">Pick a competition, team or player to add to your feed:</label>
                                <CustomFilters addCustomFilter={this.addCustomFilter}/>
                                <div className="input-wrapper inline-input">
                                    <label className="form-label label-title">Dashboard Keyword:</label>
                                    <FilterResults choices={this.state.choices} />                            
                                </div>
                            </div>
                            <div className="add-dashboard-instructions">
                                <h3>Step 3</h3>
                                <p>Search for competitions, teams, players, or publication sources. Selected keywords also appear here.</p>
                                <p>PRO users can add up to 5 competitions, 5 teams, 5 players, and unlimited custom keywords.  <Link to={routes.BILLING_PATH}>Upgrade now?</Link></p>
                            </div>
                        </div>
                        <div className="add-dashboard-section">
                            <div className="add-dashboard-form half">
                                <h3 className="sub-title">Select Your Feed</h3>

                                <ul className="header-tab">
                                    <li style={{backgroundColor : this.state.activeFilterList === 'competitions' || this.state.activeFilterList === 'teams' || this.state.activeFilterList === 'players' ? '#86C232': 'initial'}} onClick={() => this.setActiveCategory('competitions')}>{this.state.activeFilterList}</li>
                                    <li style={{backgroundColor : this.state.activeFilterList === 'sources' ? '#86C232': 'initial'}} onClick={() => this.setActiveCategory('sources')}>Publications</li>
                                </ul>

                                {activeFilterList}

                            </div>
                            <div className="add-dashboard-form half">
                                <h3 className="sub-title">Select Publication Tiers</h3>

                                <SourceTypeList />

                                <PresetFilterList />

                                <div className="input-wrapper inline-input">
                                    <div className="flex-container">
                                        <div className="input-wrapper inline-input checkbox full-width">
                                            <label className="form-label">Include Default Tweets</label>
                                            <input type="checkbox" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-wrapper inline-input checkbox full-width">
                                            <label className="form-label">Include Multimedia Tweets</label>
                                            <input type="checkbox" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="add-dashboard-section">
                            <div className="add-dashboard-form">
                                <AddCustomTwitter />
                            </div>
                            <div className="add-dashboard-instructions">
                                <h3>Step 6</h3>
                                <p>You can also choose to add any Twitter accounts that we have not included within our default Twitter accounts list.</p>
                                <p>You may also add any hashtag feeds to your dashboard to stay up to date on specific trends.</p>
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
    errors: state.errors,
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