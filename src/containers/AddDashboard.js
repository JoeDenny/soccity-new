import React, { Component } from 'react';
import './styles/add-dashboard1.css';
import { connect } from 'react-redux';
import { getCompetitions, getTeams, getPlayers, getSources, addDashboard, updateDashboard, getCommonKeywords} from '../actions';
import AuthWrapper from '../components/AuthWrapper';
import AddCustomTwitter from '../components/AddCustomTwitter';
import CompetitionList from '../components/CompetitionList';
import TeamList from '../components/TeamList';
import PlayerList from '../components/PlayerList';
import SourceList from '../components/SourceList';
import SourceTypeList from '../components/SourceTypeList';
import CommonKeywords from '../components/CommonKeywords';
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

        // this.props.getCompetitions();
        // this.props.getTeams();
        // this.props.getPlayers();
        // this.props.getSources();

        if(this.props.activeDashboard) {
            
            let activeDashboard = this.props.activeDashboard;
            
            this.setState({
                choices: {
                    teams: activeDashboard.teams,
                    players: activeDashboard.players,
                    competitions: activeDashboard.competitions,
                    sources: activeDashboard.sources,
                    keywords: activeDashboard.keywords.keyword
                },
                name: activeDashboard.name,
                refreshRate: '30',
                source_type: '',
                preferences: [],
                activeFilterList: 'competitions',
                competitionId: '',
                teamId: '',
            })
        }
    }

    componentWillReceiveProps(newProps) {
        console.log('newProps', newProps);
        
        if (newProps.updateDashboardSuccess) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }

        if(newProps.activeDashboard) {
            let activeDashboard = newProps.activeDashboard;

            this.setState({
                choices: {
                    teams: activeDashboard.teams,
                    players: activeDashboard.players,
                    competitions: activeDashboard.competitions,
                    sources: activeDashboard.sources,
                    keywords: activeDashboard.keywords
                },
                name: activeDashboard.name,
                refreshRate: '30',
                source_type: '',
                preferences: [],
                activeFilterList: 'competitions',
                competitionId: '',
                teamId: '',
            })
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
                [category]: [
                    item
                ]
            }
        })

        if(category === 'competitions') {
            this.props.getCommonKeywords('competition_id', item.id);
        } else if(category === 'teams') {
            this.props.getCommonKeywords('team_id', item.id);
        } else if(category === 'players') {
            this.props.getCommonKeywords('player_id', item.id);
        }
    }

    addCustomFilter = (keyword) => {

        keyword = keyword.toLowerCase();
        
        this.setState({
            ...this.state,
            choices: {
                ...this.state.choices,
                keywords: [keyword]
            }
        })
    }

    addSourceType = (showTweets) => {
        this.setState({
            source_type: showTweets ? 'twitter' : 'rss'
        })
    }

    removeFilter = (type) => {
        this.setState({
            ...this.state,
            choices: {
                ...this.state.choices,
                [type]: undefined
            }
        })
    }

    updateDashboard = () => {
        const params = {
            name: this.state.name || 'default dashboard',
            source_type: this.state.source_type
        }

        if(this.state.choices.competitions.length) {
            params.competitions = this.state.choices.competitions.id;
        } else if(this.state.choices.teams.length) {
            params.teams = this.state.choices.teams.id;
        } else if(this.state.choices.players.length) {
            params.players = this.state.choices.players.id;
        }

        if(this.state.choices.sources.length) {
            params.sources = this.state.choices.sources.id;
        }

        if(this.state.choices.keywords.length) {
            params.keywords = this.state.choices.keywords
        }

        console.log('para', params);
        
        // if(this.props.activeDashboard) {
            
        //     let dashboardId = this.props.activeDashboard.id;
        //     this.props.updateDashboard(dashboardId, params);  
        // } else {

        //     this.props.addDashboard(params);
        // }
    }

    addDashboard = () => {
        
        const params = {
            name: this.state.name || 'default dashboard',
            source_type: this.state.source_type
        }        

        if(this.state.choices.competitions) {
            params.competitions = [this.state.choices.competitions[0].id];
        } else if(this.state.choices.teams) {
            params.teams = [this.state.choices.teams[0].id];
        } else if(this.state.choices.players) {
            params.players = [this.state.choices.players[0].id];
        }

        if(this.state.choices.sources) {
            params.sources = [this.state.choices.sources.id];
        }

        if(this.state.choices.keywords) {
            params.keywords = this.state.choices.keywords;
        }
        
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
                        <div className="main-form">
                            <div className="add-dashboard-section align-items">
                                <div className="add-dashboard-form">
                                    <div className="input-wrapper inline-input">
                                        <label className="form-label label-title">Dashboard Name:</label>
                                        <input className="text-input" placeholder="e.g. Arsenal" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="add-dashboard-instructions">
                                    <h3>Step 1</h3>
                                    <p>Give your dashboard a name.</p>
                                </div>
                            </div>

                            <div className="add-dashboard-section align-items">
                                <div className="add-dashboard-form">
                                    <div className="input-wrapper inline-input">
                                        <label className="form-label label-title">Select auto-refresh rate:</label>
                                        <div className="flex-container">
                                            <div className="input-wrapper inline-input checkbox radio">
                                                <label className="form-label">
                                                    <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "30"} value="30"/>
                                                    30 secs
                                                </label>
                                            </div>
                                            <div className="input-wrapper inline-input checkbox radio">
                                                <label className="form-label">
                                                    <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "60"} value="60" />
                                                    1 min
                                                </label>
                                            </div>
                                            <div className="input-wrapper inline-input checkbox radio">
                                                <label className="form-label">
                                                    <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "120"} value="120"/>
                                                    2 mins
                                                </label>
                                            </div>
                                            <div className="input-wrapper inline-input checkbox radio">
                                                <label className="form-label">
                                                    <input type="radio" onChange={this.handleRadioChange} checked={this.state.refreshRate === "300"} value="300"/>
                                                    5 mins
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-dashboard-instructions">
                                    <h3>Step 2</h3>
                                    <p>Choose how often you'd like your dashboard to update with new articles.</p>
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
                                                <label className="form-label">
                                                    <span>Include Default Tweets</span>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                            <div className="input-wrapper inline-input checkbox full-width">
                                                <label className="form-label">
                                                    <span>Include Multimedia Tweets</span>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="add-dashboard-section">
                                <div className="add-dashboard-form">
                                    <label className="label-title">Pick a competition, team or player to add to your feed:</label>

                                    <div className="relative">
                                        <FilterResults choices={this.state.choices} removeFilter={this.removeFilter} />
                                        <CustomFilters addCustomFilter={this.addCustomFilter}/>
                                    </div>          
                                    <div className="input-wrapper inline-input">
                                        <label className="form-label label-title">Related Keywords:</label>
                                        <CommonKeywords keywords={this.props.commonKeywords} />
                                    </div>
                                </div>
                                <div className="add-dashboard-instructions">
                                    <h3>Step 3</h3>
                                    <p>Search for competitions, teams, players, or publication sources.</p>
                                    <p>PRO users can add up to 5 competitions, 5 teams, 5 players, and unlimited custom keywords.  <Link to={routes.BILLING_PATH}>Upgrade now?</Link></p>
                                </div>
                            </div>

                            <div className="add-dashboard-section">
                                <div className="add-dashboard-form">
                                    <AddCustomTwitter />
                                </div>
                                <div className="add-dashboard-instructions">
                                    <h3>Step 4</h3>
                                    <p>Add Twitter accounts to your custom Twitter feed.</p>
                                    <p>You may also include hashtags to stay up to date on specific trends.</p>
                                </div>
                            </div>

                        
                            <ErrorMessages errors={this.props.errors} />

                            <div className="text-center">
                                <button className="btn btn-primary add-dashboard-btn"
                                        onClick={this.addDashboard}>Create</button>

                                <button className="btn btn-primary update-dashboard-btn"
                                        onClick={this.updateDashboard}>Update</button>
                            </div>
                        </div>
                        <div className="instructions-panel">
                            <div className="step">
                                <h3>Step 1</h3>
                                <p>Give your dashboard a name.</p>
                            </div>
                            <div className="step">
                                <h3>Step 2</h3>
                                <p>Choose how often you'd like your dashboard to update with new articles.</p>
                            </div>
                            <div className="step">
                                <h3>Step 3</h3>
                                <p>Search for competitions, teams, players, or publication sources.</p>
                                <p>Publication tiers represent the reliability of the articles, with Tier 1 being the most reliable and Tier 5 the least.</p>
                                <p>Including Default Tweets will add our default list of Twitter accounts to your feed. You can add your own accounts in Step 4.</p>
                                <p>PRO users can add up to 5 competitions, 5 teams, 5 players, and unlimited custom keywords.  <Link to={routes.BILLING_PATH}>Upgrade now?</Link></p>
                            </div>
                            <div className="step step4">
                                <h3>Step 4</h3>
                                <p>Add Twitter accounts to your custom Twitter feed.</p>
                                <p>You may also include hashtags to stay up to date on specific trends.</p>
                            </div>
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
    commonKeywords: state.commonKeywords,
    updateDashboardSuccess: state.updateDashboardSuccess
});

const mapDispatchToProps = (dispatch) => ({
    getCompetitions: () => dispatch(getCompetitions()),
    getTeams: () => dispatch(getTeams()),
    getPlayers: () => dispatch(getPlayers()),
    getSources: () => dispatch(getSources()),
    getCommonKeywords: (type, id) => dispatch(getCommonKeywords(type, id)),
    addDashboard: (params) => dispatch(addDashboard(params)),
    updateDashboard: (dashboardId, params) => dispatch(updateDashboard(dashboardId, params))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDashboard);