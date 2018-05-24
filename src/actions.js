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

export const SET_AUTO_REFRESH = 'SET_AUTO_REFRESH';
export const setAutoRefresh = (time) => ({
    type: SET_AUTO_REFRESH,
    payload: {
        time
    }
});

export const OPEN_MENU = 'OPEN_MENU';
export const openMenu = () => ({
    type: OPEN_MENU
});

export const CLOSE_MENU = 'CLOSE_MENU';
export const closeMenu = () => ({
    type: CLOSE_MENU
});

export const FETCHING_DATA = 'fetching data';
export const fetchingData = () => ({
    type: FETCHING_DATA
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

export const GET_STRIPE_CONFIG_SUCCESS = 'GET_STRIPE_CONFIG_SUCCESS';
export const getStripeConfigSuccess = (stripeConfig) => ({
    type: GET_STRIPE_CONFIG_SUCCESS,
    payload: {
        stripeConfig
    }
});

export const SUBCRIBE_SUCCESS = 'SUBCRIBE_SUCCESS';
export const subscribeSuccess = () => ({
    type: SUBCRIBE_SUCCESS
});

export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE';
export const subscribeFailure = (errors) => ({
    type: SUBSCRIBE_FAILURE,
    payload: {
        errors
    }
});

export const UPDATE_USER_SUCCESS = 'update user success';
export const updateUserSuccess = (user) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {
        user
    }
});

export const UPDATE_USER_FAILURE = 'update user failure';
export const updateUserFailure = (errors) => ({
    type: UPDATE_USER_FAILURE,
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

export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const getNewsSuccess = (news) => ({
    type: GET_NEWS_SUCCESS,
    payload: { news }
});

export const UPDATE_NEWS_SUCCESS = 'UPDATE_NEWS_SUCCESS';
export const updateNewsSuccess = (news) => ({
    type: UPDATE_NEWS_SUCCESS,
    payload: { news }
});

export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';
export const getNewsFailure = (errors) => ({
    type: GET_NEWS_FAILURE,
    payload: { errors }
});

export const GET_POPULAR_NEWS_SUCCESS = 'GET_POPULAR_NEWS_SUCCESS';
export const getPopularNewsSuccess = (popularNews) => ({
    type: GET_POPULAR_NEWS_SUCCESS,
    payload: { popularNews }
});

export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';
export const setPopularNews = () => ({
    type: SET_POPULAR_NEWS
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

export const SET_ACTIVE_MENU_ITEM = 'SET_ACTIVE_MENU_ITEM';
export const setActiveMenuItem = (item) => ({
    type: SET_ACTIVE_MENU_ITEM,
    payload: {
        item
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

export const GET_LATEST_COMMENTS_SUCCESS = 'GET_LATEST_COMMENTS_SUCCESS';
export const getLatestCommentsSuccess = (latestComments) => ({
    type: GET_LATEST_COMMENTS_SUCCESS,
    payload: {
        latestComments
    }
});

export const GET_RECENTLY_VIEWED_SUCCESS = 'GET_RECENTLY_VIEWED_SUCCESS';
export const getRecentlyViewedSuccess = (recentlyViewed) => ({
    type: GET_RECENTLY_VIEWED_SUCCESS,
    payload: {
        recentlyViewed
    }
});

export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';
export const getFollowersSuccess = (followers) => ({
    type: GET_FOLLOWERS_SUCCESS,
    payload: { followers }
});

export const GET_FOLLOWINGS_SUCCESS = 'GET_FOLLOWINGS_SUCCESS';
export const getFollowingsSuccess = (followings) => ({
    type: GET_FOLLOWINGS_SUCCESS,
    payload: { followings }
});

export const GET_DEFAULT_AVATARS_SUCCESS = 'GET_DEFAULT_AVATARS_SUCCESS';
export const getDefaultAvatarsSuccess = (defaultAvatars) => ({
    type: GET_DEFAULT_AVATARS_SUCCESS,
    payload: { defaultAvatars }
});

export const FAVOURITE_ARTICLE = '[News] Like news';
export const favouriteArticleUpdate = (news) => ({
    type: FAVOURITE_ARTICLE,
    payload: {
        news
    }
});

export const SEARCHING_FOR_USERS = 'SEARCHING_FOR_USERS';
export const searchingForUsers = () => ({
    type: SEARCHING_FOR_USERS
});

export const STOP_SEARCHING_FOR_USERS = 'STOP_SEARCHING_FOR_USERS';
export const stopSearchingForUsers = () => ({
    type: STOP_SEARCHING_FOR_USERS
});

export const FIND_USERS_SUCCESS = 'FIND_USERS_SUCCESS';
export const findUsersSuccess = (users) => ({
    type: FIND_USERS_SUCCESS,
    payload: {
        users
    }
});

export const BOOKMARK_ARTICLE = 'BOOKMARK_ARTICLE';
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

export const SEARCH_FOR_TEAMS_SUCCESS = 'SEARCH_FOR_TEAMS_SUCCESS';
export const searchForTeamsSuccess = (searchResults) => ({
    type: SEARCH_FOR_TEAMS_SUCCESS,
    payload: {
        searchResults
    }
});

export const SEARCH_FOR_COMPETITIONS_SUCCESS = 'SEARCH_FOR_COMPETITIONS_SUCCESS';
export const searchForCompetitionsSuccess = (searchResults) => ({
    type: SEARCH_FOR_COMPETITIONS_SUCCESS,
    payload: {
        searchResults
    }
});

export const SEARCH_FOR_PLAYERS_SUCCESS = 'SEARCH_FOR_PLAYERS_SUCCESS';
export const searchForPlayersSuccess = (searchResults) => ({
    type: SEARCH_FOR_PLAYERS_SUCCESS,
    payload: {
        searchResults
    }
});

export const SEARCH_FOR_SOURCES_SUCCESS = 'SEARCH_FOR_SOURCES_SUCCESS';
export const searchForSourcesSuccess = (searchResults) => ({
    type: SEARCH_FOR_SOURCES_SUCCESS,
    payload: {
        searchResults
    }
});

export const ADD_CUSTOM_TWITTER_SUCCESS = 'ADD_CUSTOM_TWITTER_SUCCESS';
export const addCustomTwitterAccountSuccess = (source) => ({
    type: ADD_CUSTOM_TWITTER_SUCCESS,
    payload: { source }
});

export const ADD_CUSTOM_TWITTER_FAILURE = 'ADD_CUSTOM_TWITTER_FAILURE';
export const addCustomTwitterAccountFailure = (errors) => ({
    type: ADD_CUSTOM_TWITTER_FAILURE,
    payload: { errors }
});

export const SAVE_DASHBOARDS = 'SAVE_DASHBOARDS';
export const getDashboardsUpdate = (dashboards) => ({
    type: SAVE_DASHBOARDS,
    payload: {
        dashboards
    }
});

export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const deleteDashboardUpdate = () => ({
    type: DELETE_DASHBOARD
});

export const ADD_DASHBOARD_SUCCESS = 'ADD_DASHBOARD_SUCCESS';
export const addDashboardSuccess = (dashboard) => ({
    type: ADD_DASHBOARD_SUCCESS,
    payload: {
        dashboard
    }
});

export const ADD_DASHBOARD_FAILURE = 'ADD_DASHBOARD_FAILURE';
export const addDashboardFailure = (errors) => ({
    type: ADD_DASHBOARD_FAILURE,
    payload: {
        errors
    }
});

export const SET_ACTIVE_DASHBOARD = 'SET_ACTIVE_DASHBOARD';
export const setActiveDashboard = (activeDashboard) => ({
    type: SET_ACTIVE_DASHBOARD,
    payload: {
        activeDashboard
    }
});

export const GET_COMMON_KEYWORDS_SUCCESS = 'GET_COMMON_KEYWORDS_SUCCESS';
export const getCommonKeywordsSuccess = (commonKeywords) => ({
    type: GET_COMMON_KEYWORDS_SUCCESS,
    payload: {
        commonKeywords
    }
});

export const HIGHLIGHT_KEYWORDS = 'HIGHLIGHT_KEYWORDS';
export const highlightKeywords = (keywordsConfig) => ({
    type: HIGHLIGHT_KEYWORDS,
    payload: {
        keywordsConfig
    }
});

export const login = (email, password) => {
    return (dispatch) => {    
        dispatch(fetchingData());    
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

export const getStripeConfig = () => {
    return (dispatch) => {
        api.getStripeConfig().then(
            (res) => {
                dispatch(getStripeConfigSuccess(res.data));
            })
    };
};

export const subscribe = (token, email, plan) => {
    return (dispatch) => {
        api.subscribe(token, email, plan).then(
            (res) => {
                if(res.data.success) {                    
                    dispatch(subscribeSuccess());
                } else {
                    let error = {
                        message: res.data.message
                    }  
                    dispatch(subscribeFailure(error))
                }
                
            })
    };
};

export const updateUserDetails = (formData) => {
    return (dispatch) => {
        dispatch(fetchingData());
        api.updateUserDetails(formData).then(
            (res) => {
                dispatch(updateUserSuccess(res.data.user));
            })
            .catch(error => {                
                if (error.response) {                                        
                    dispatch(updateUserFailure(error.response.data.errors));                    
                }
            });
    };
};

export const getNews = (params) => {        
    return (dispatch) => {
        dispatch(fetchingData());
        api.getNews(params)
            .then((res) => {                                
                dispatch(getNewsSuccess(res.data.allNews));
            })
            .catch(error => {
                if (error.response) {
                    if(error.response.status === 401) {
                        dispatch(getNewsFailure(""));                        
                    } else if(error.response.data.errors) {
                        dispatch(getNewsFailure(error.response.data.errors));
                    } else {
                        let errorMessage = {
                            error: ['']
                        };
                        dispatch(getNewsFailure(errorMessage));
                    }        
                }
            });
    };
};

export const getCustomNews = (type, id, params) => {        
    return (dispatch) => {
        dispatch(fetchingData());
        api.getCustomNews(type, id, params)
            .then((res) => {                                
                dispatch(getNewsSuccess(res.data.allNews));
            })
            .catch(error => {
                if (error.response) {
                   console.log('error', error.response);
                   
                }
            });
    };
};

export const updateNews = (params) => {        
    return (dispatch) => {
        dispatch(fetchingData());
        api.getNews(params)
            .then((res) => {                                
                dispatch(updateNewsSuccess(res.data.allNews));
            })
            .catch(error => {
                if (error.response) {
                    dispatch(getNewsFailure(""));                                
                }
            });
    };
};

export const getPopularNews = () => {        
    return (dispatch) => {
        dispatch(fetchingData());
        api.getPopularNews()
            .then((res) => {
                dispatch(getPopularNewsSuccess(res.data.popularNews));                                
            })
            .catch(error => {  
                if (error.response) {                                        
                    let error = {
                        getNews: ['']
                    }                
                    dispatch(getNewsFailure(error));
                }
            });
    };
};

export const openArticle = (id) => {        
    return (dispatch) => {
        api.openArticle(id)
            .then(() => {                                
                dispatch(getRecentlyViewed());
            })
    };
};

export const getCommonKeywords = (type, id) => {        
    return (dispatch) => {
        api.getCommonKeywords(type, id)
            .then((res) => {                                
                dispatch(getCommonKeywordsSuccess(res.data.keywords));
            })
    };
};

export const findUsers = (username) => {        
    return (dispatch) => {
        dispatch(searchingForUsers());
        api.findUsers(username)
            .then((res) => {                                
                dispatch(findUsersSuccess(res.data.users.data));
            })
    };
};

export const getDefaultAvatars = () => {        
    return (dispatch) => {
        api.getDefaultAvatars()
            .then((res) => {                                
                dispatch(getDefaultAvatarsSuccess(res.data.avatars));                
            })
    };
};

export const getCompetitions = () => {
    return (dispatch) => {
        api.getCompetitions().then((res) => {            
            dispatch(saveCompetitions(res.data.data));
        });
    };
};

export const getTeams = (id) => {
    return (dispatch) => {
        api.getTeams(id).then((res) => {            
            dispatch(saveTeams(res.data.data));
        });
    };
};

export const getPlayers = (id) => {
    return (dispatch) => {
        api.getPlayers(id).then((res) => {         
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

export const getRecentlyViewed = () => {
    return (dispatch) => {
        api.getRecentlyViewed().then((res) => {            
            dispatch(getRecentlyViewedSuccess(res.data.seen));            
        });
    };
};

export const getLatestComments = () => {
    return (dispatch) => {
        api.getLatestComments().then((res) => {
            dispatch(getLatestCommentsSuccess(res.data.comments.data));            
        });
    };
};

export const addComment = (id, comment, parentId) => {    
    return (dispatch) => {
        api.addComment(id, comment, parentId).then((res) => {
            dispatch(commentNewsUpdate(res.data.news));            
        });
    };
};

export const addCustomTwitterAccount = (type, name) => {
    return (dispatch) => {
        api.addCustomTwitterAccount(type, name)
            .then((res) => {                
                dispatch(addCustomTwitterAccountSuccess(res.data.source));
            })
            .catch(error => {  
                if (error.response) {                                        
                    dispatch(addCustomTwitterAccountFailure(error.response.data.errors));
                }
            });
    };
};
export const toggleFollow = (user) => {    
    return (dispatch) => {
        api.toggleFollow(user).then((res) => {
            dispatch(getFollowings());            
        });
    };
};

export const getFollowers = () => {    
    return (dispatch) => {
        api.getFollowers().then((res) => {
            dispatch(getFollowersSuccess(res.data.followers.data));            
        });
    };
};

export const getFollowings = () => {    
    return (dispatch) => {
        api.getFollowings().then((res) => {            
            dispatch(getFollowingsSuccess(res.data.followings.data));            
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
                
                dispatch(addDashboardSuccess(res.data.dashboard));            
            })
            .catch(error => {  
                if (error.response) {                                        
                    dispatch(addDashboardFailure(error.response.data.errors));
                }
            });
    };
};

export const updateDashboard = (id, params) => {

    return (dispatch) => {
        api.updateDashboard(id, params)
            .then((res) => {                    
                dispatch(addDashboardSuccess(res.data.dashboard));            
            })
            .catch(error => {  
                if (error.response) {                                        
                    dispatch(addDashboardFailure(error.response.data.errors));
                }
            });
    };
};

export const deleteDashboard = (id) => {
    
    return (dispatch) => {
        api.deleteDashboard(id)
            .then((res) => {                                
                dispatch(deleteDashboardUpdate());
                dispatch(getDashboards())
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

export const searchForTeams = (text) => {

    return (dispatch) => {
        api.searchTeams(text)
            .then((res) => {                   
                dispatch(searchForTeamsSuccess(res.data.data));
            });
    };
};
export const searchForCompetitions = (text) => {

    return (dispatch) => {
        api.searchCompetitions(text)
            .then((res) => {                   
                dispatch(searchForCompetitionsSuccess(res.data.data));
            });
    };
};
export const searchForPlayers = (text) => {

    return (dispatch) => {
        api.searchPlayers(text)
            .then((res) => {                   
                dispatch(searchForPlayersSuccess(res.data.data));
            });
    };
};
export const searchForSources = (text) => {

    return (dispatch) => {
        api.searchSources(text)
            .then((res) => {                   
                dispatch(searchForSourcesSuccess(res.data.data));
            });
    };
};