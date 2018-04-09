import api from './api';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, SET_ACTIVE_NEWS, REMOVE_ACTIVE_NEWS, COMMENT_NEWS } from './actions';

const initialState = {
    token: '',
    user: {},
    activeNews: {}
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
        default:
            return state;
    }
};

export default rootReducer;