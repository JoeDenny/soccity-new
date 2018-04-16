import api from './api';

export const LOGIN_SUCCESS = 'login success';
export const loginSuccess = (token, user) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token,
        user
    }
});

export const LOGOUT = 'logout';
export const logout = () => ({
    type: LOGOUT
});

export const REGISTER_SUCCESS = 'register success';
export const registerSuccess = (token, user) => ({
    type: REGISTER_SUCCESS,
    payload: {
        token,
        user
    }
});

export const REGISTER_FAILURE = 'register failure';
export const registerFailure = (errors) => ({
    type: REGISTER_FAILURE,
    payload: {
        errors
    }
});

export const LOGIN_FAILURE = 'login failure';
export const loginFailure = (errors) => ({
    type: LOGIN_FAILURE,
    payload: {
        errors
    }
});

export const SAVE_NEWS = '[News] Save received news';
export const saveNews = (news) => ({
    type: SAVE_NEWS,
    payload: {
        news
    }
});

export const SAVE_COMPETITIONS = '[News] Save competitions';
export const saveCompetitions = (competitions) => ({
    type: SAVE_COMPETITIONS,
    payload: {
        competitions
    }
});

export const SAVE_TEAMS = '[News] Save teams';
export const saveTeams = (teams) => ({
    type: SAVE_TEAMS,
    payload: {
        teams
    }
});

export const SAVE_PLAYERS = '[News] Save players';
export const savePlayers = (players) => ({
    type: SAVE_PLAYERS,
    payload: {
        players
    }
});

export const SAVE_SOURCES = '[News] Save sources';
export const saveSources = (sources) => ({
    type: SAVE_SOURCES,
    payload: {
        sources
    }
});

export const SET_ACTIVE_NEWS = '[News] Set active news';
export const setActiveNews = (news) => ({
    type: SET_ACTIVE_NEWS,
    payload: {
        news
    }
});

export const REMOVE_ACTIVE_NEWS = '[News] Remove active news';
export const removeActiveNews = () => ({
    type: REMOVE_ACTIVE_NEWS,
});

export const COMMENT_NEWS = '[News] Comment news';
export const commentNewsUpdate = (news) => ({
    type: COMMENT_NEWS,
    payload: {
        news
    }
});

export const FAVOURITE_ARTICLE = '[News] Like news';
export const favouriteArticleUpdate = (news) => ({
    type: FAVOURITE_ARTICLE,
    payload: {
        news
    }
});

export const BOOKMARK_ARTICLE = '[News] bookmark news';
export const bookmarkArticleUpdate = (news) => ({
    type: BOOKMARK_ARTICLE,
    payload: {
        news
    }
});

export const SAVE_ACTIVITY = '[News] Save received activity';
export const saveActivity = (activity) => ({
    type: SAVE_ACTIVITY,
    payload: {
        activity
    }
});

export const SEARCH = 'SEARCH';
export const search = (searchValue) => ({
    type: SEARCH,
    payload: {
        searchValue
    }
});

export const SAVE_DASHBOARDS = 'get dashboards';
export const getDashboardsUpdate = (dashboards) => ({
    type: SAVE_DASHBOARDS,
    payload: {
        dashboards
    }
});

export const DELETE_DASHBOARD = 'delete dashboard';
export const deleteDashboardUpdate = (dashboards) => ({
    type: DELETE_DASHBOARD
});

export const login = (email, password) => {
    return (dispatch) => {        
        api.login(email, password).then((res) => {
            dispatch(loginSuccess(
                res.data.token,
                res.data.user          
            ));
        }).catch(error => {
            if (error.response) {   
                let error = {
                    login: ['Incorrect email address or password.']
                }                
                dispatch(loginFailure(error));
            }
        });
    };
};

export const register = (formData) => {
    return (dispatch) => {
        api.register(formData).then(
            (res) => {
                dispatch(registerSuccess(
                    res.data.token,
                    res.data.user
                ));
            })
            .catch(error => {
                if (error.response) {                                        
                    dispatch(registerFailure(error.response.data.errors));
                }
            });
    };
};

export const getNews = (params) => {
    return (dispatch) => {
        api.getNews(params).then(
            (res) => {            
                dispatch(saveNews(res.data.allNews));
            },
            (err) => {
                api.destroyToken();                       
            });
    };
};

export const getCompetitions = () => {
    return (dispatch) => {
        api.getCompetitions().then((res) => {            
            dispatch(saveCompetitions(res.data.data));
        });
    };
};

export const getTeams = () => {
    return (dispatch) => {
        api.getTeams().then((res) => {            
            dispatch(saveTeams(res.data.data));
        });
    };
};

export const getPlayers = () => {
    return (dispatch) => {
        api.getPlayers().then((res) => {         
            dispatch(savePlayers(res.data.data));
        });
    };
};

export const getSources = () => {    
    return (dispatch) => {
        api.getSources().then((res) => {                             
            dispatch(saveSources(res.data.data));
        });
    };
};

export const addComment = (id, comment) => {
    return (dispatch) => {
        api.addComment(id, comment).then((res) => {
            dispatch(commentNewsUpdate(res.data.news));            
        });
    };
};

export const getUserActivity = () => {
    return (dispatch) => {
        api.getUserActivity().then((res) => {
            dispatch(saveActivity(res.data.activity));            
        });
    };
};

export const favouriteArticle = (id) => {
    return (dispatch) => {
        api.favouriteArticle(id)
            .then((res) => {
                dispatch(favouriteArticleUpdate(res.data.news));
            });
    };
};

export const bookmarkArticle = (id) => {
    return (dispatch) => {
        api.bookmarkArticle(id)
            .then((res) => {
                dispatch(bookmarkArticleUpdate(res.data.news));
            });
    };
};

export const addDashboard = (params) => {

    return (dispatch) => {
        api.addDashboard(params)
            .then((res) => {                
                // dispatch(addDashboardUpdate(res.data.news));
            });
    };
};

export const deleteDashboard = (id) => {
    
    return (dispatch) => {
        api.deleteDashboard(id)
            .then((res) => {                                
                dispatch(deleteDashboardUpdate());
            });
    };
};

export const getDashboards = () => {

    return (dispatch) => {
        api.getDashboards()
            .then((res) => {   
                dispatch(getDashboardsUpdate(res.data.dashboards));
            });
    };
};