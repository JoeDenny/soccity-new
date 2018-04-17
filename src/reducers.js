import api from './api';
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, LOGIN_FAILURE, REGISTER_FAILURE, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,FETCHING_DATA, SAVE_NEWS, SAVE_COMPETITIONS, SAVE_TEAMS, SAVE_PLAYERS, SAVE_SOURCES, SET_ACTIVE_NEWS, SAVE_DASHBOARDS, DELETE_DASHBOARD, REMOVE_ACTIVE_NEWS, COMMENT_NEWS, SAVE_ACTIVITY, FAVOURITE_ARTICLE, BOOKMARK_ARTICLE, SEARCH } from './actions';

const initialState = {
    token: '',
    user: {},
    activeNews: {},
    news: [],
    dashboards: [],
    competitions: [],
    teams: [],
    players: [],
    loginErrors: [],
    registerErrors: [],
    isFetching: false,
    updateUserSuccess: false
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
                isFetching: true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registerErrors: action.payload.errors
            }    
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUserSuccess: true
            }   
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                updateUserSuccess: false,
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
        case SAVE_NEWS:            
            return {
                ...state,
                news: action.payload.news.data,
                current_page: action.payload.news.current_page,
                last_page: action.payload.news.last_page,
                isFetching: false
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
        case DELETE_DASHBOARD:
            api.getDashboards();
            break;
        case SET_ACTIVE_NEWS:        
            return {
                ...state,
                activeNews: action.payload.news
            };
        case REMOVE_ACTIVE_NEWS:
            return {
                ...state,
                activeNews: undefined
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