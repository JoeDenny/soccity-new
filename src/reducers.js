import api from './api';
import { LOGIN_SUCCESS } from './actions';

const initialState = {
    token: '',
    user: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case "REGISTER_SUCCESS":
            
            api.saveToken(action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
    
        default:
            return state;
    }
};

export default rootReducer;