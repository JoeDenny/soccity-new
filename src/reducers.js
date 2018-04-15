import api from './api';
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, LOGIN_FAILURE, REGISTER_FAILURE, SAVE_NEWS, SAVE_COMPETITIONS, SAVE_TEAMS, SAVE_PLAYERS, SAVE_SOURCES, SET_ACTIVE_NEWS, REMOVE_ACTIVE_NEWS, COMMENT_NEWS, SAVE_ACTIVITY, FAVOURITE_ARTICLE, SEARCH } from './actions';

const initialState = {
    token: '',
    user: {},
    activeNews: {},
    news: [],
    competitions: [],
    teams: [],
    players: [],
    loginErrors: [],
    registerErrors: [],
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
        case REGISTER_FAILURE:
            return {
                ...state,
                registerErrors: action.payload.errors
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
                last_page: action.payload.news.last_page
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