import api from './api';
import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT, UPDATE_USER_SUCCESS, OPEN_MENU, CLOSE_MENU, UPDATE_USER_FAILURE,FETCHING_DATA, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, SAVE_COMPETITIONS, SAVE_TEAMS, SAVE_PLAYERS, SAVE_SOURCES, SET_ACTIVE_NEWS, ADD_CUSTOM_TWITTER_SUCCESS, ADD_CUSTOM_TWITTER_FAILURE, SET_ACTIVE_MENU_ITEM, SAVE_DASHBOARDS, ADD_DASHBOARD, ADD_DASHBOARD_FAILURE, DELETE_DASHBOARD, GET_FOLLOWERS_SUCCESS, GET_FOLLOWINGS_SUCCESS, REMOVE_ACTIVE_NEWS, COMMENT_NEWS, SAVE_ACTIVITY, GET_LATEST_COMMENTS_SUCCESS, SET_AUTO_REFRESH, FAVOURITE_ARTICLE, BOOKMARK_ARTICLE, SEARCH } from './actions';

const initialState = {
    token: '',
    user: {},
    news: [],
    activeNews: {},
    isPopularNews: false,
    autoRefreshRate: undefined,
    activeMenuItem: undefined,
    dashboards: [],
    competitions: [],
    teams: [],
    players: [],
    followers: [],
    followings: [],
    isMenuOpen: false,
    errors: [],
    loginErrors: [],
    registerErrors: [],
    addDashboardErrors: [],
    loading: false,
    updateUserSuccess: false,
    updateDashboardSuccess: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            
            api.saveToken(action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case FETCHING_DATA:
            return {
                ...state,
                loading: true
            }
        case OPEN_MENU:
            return {
                ...state,
                isMenuOpen: true
            }
        case CLOSE_MENU:
            return {
                ...state,
                isMenuOpen: false,
                activeMenuItem: undefined
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registerErrors: action.payload.errors
            }    
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUserSuccess: true,
                loading: false
            }   
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                updateUserSuccess: false,
                loading: false,
                updateUserErrors: action.payload.errors
            }            
        case LOGIN_FAILURE:
            return {
                ...state,
                loginErrors: action.payload.errors
            }            
        case LOGOUT:
            return {
                state: undefined
            }
        case GET_NEWS_SUCCESS:            
            return {
                ...state,
                news: action.payload.news.data,
                isPopularNews: action.payload.isPopularNews,
                current_page: action.payload.news.current_page,
                last_page: action.payload.news.last_page,
                loading: false
            };
        case GET_NEWS_FAILURE:            
            return {
                ...state,
                news: [],
                errors: action.payload.errors,
                loading: false
            };
        case GET_FOLLOWERS_SUCCESS:            
            return {
                ...state,
                followers: action.payload.followers
            };
        case GET_FOLLOWINGS_SUCCESS:            
            return {
                ...state,
                followings: action.payload.followings
            };
        case SAVE_COMPETITIONS:
            return {
                ...state,
                competitions: action.payload.competitions
            };
        case SAVE_TEAMS:
            return {
                ...state,
                teams: action.payload.teams
            };
        case SAVE_PLAYERS:
            return {
                ...state,
                players: action.payload.players
            };
        case SAVE_SOURCES:
            return {
                ...state,
                sources: action.payload.sources
            };
        case SAVE_DASHBOARDS:            
            return {
                ...state,
                dashboards: action.payload.dashboards
            };
        case ADD_CUSTOM_TWITTER_SUCCESS:            
            return {
                ...state,
                twitterSources: action.payload.source
            };
        case ADD_CUSTOM_TWITTER_FAILURE:            
            return {
                ...state,
                errors: action.payload.errors
            };
        case ADD_DASHBOARD:            
            api.getDashboards();
            return {
                ...state,
                updateDashboardSuccess: true
            };
        case ADD_DASHBOARD_FAILURE:            
            return {
                ...state,
                addDashboardErrors: action.payload.errors
            };
        case DELETE_DASHBOARD:
            api.getDashboards();
            break;
        case SET_ACTIVE_NEWS:        
            return {
                ...state,
                activeNews: action.payload.news
            };
        case SET_AUTO_REFRESH:        
            return {
                ...state,
                autoRefreshRate: action.payload.time
            };
        case SET_ACTIVE_MENU_ITEM:            
            return {
                ...state,
                isMenuOpen: true,
                activeMenuItem: action.payload.item
            };
        case REMOVE_ACTIVE_NEWS:
            return {
                ...state,
                activeNews: undefined
            };
        case GET_LATEST_COMMENTS_SUCCESS:
            return {
                ...state,
                latestComments: action.payload.latestComments
            };
        case COMMENT_NEWS: 
            const { comments, comments_count } = action.payload.news;
            return {
                ...state,
                activeNews: action.payload.news,
                news: state.news && state.news.map((news) => {
                    if (news.id === action.payload.news.id) {
                        return {
                            ...news,
                            comments,
                            comments_count
                        };
                    }
                    
                    return news;
                })
            };
        case SAVE_ACTIVITY:
            return {
                ...state,
                activity: action.payload.activity.data
            };
        case FAVOURITE_ARTICLE:        
            const { favorites_count, is_favorited } = action.payload.news;
            return {
                ...state,
                news: state.news && state.news.map((news) => {

                    if (news.id === action.payload.news.id) {                        
                        return {
                            ...news,
                            favorites_count,
                            is_favorited
                        };
                    }
                    return news;
                })
            };
        case BOOKMARK_ARTICLE:     
            const { bookmarks_count, is_bookmarked } = action.payload.news;            
            return {
                ...state,
                news: state.news && state.news.map((news) => {

                    if (news.id === action.payload.news.id) {                        
                        return {
                            ...news,
                            bookmarks_count,
                            is_bookmarked
                        };
                    }
                    return news;
                })
            };
        case SEARCH:
            const {value} = action.payload.searchValue;
            const works = state.news.filter((val) => val.includes(value));            
            console.log('search works', works);
            return {
                ...state
            };
        default:
            return state;
    }
};

export default rootReducer;