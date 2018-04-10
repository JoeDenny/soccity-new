import api from './api';

export const LOGIN_SUCCESS = 'login success';
export const loginSuccess = (token, user) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token,
        user
    }
});

export const REGISTER_SUCCESS = 'register success';
export const registerSuccess = (token, user) => ({
    type: REGISTER_SUCCESS,
    payload: {
        token,
        user
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

export const SAVE_ACTIVITY = '[News] Save received activity';
export const saveActivity = (activity) => ({
    type: SAVE_ACTIVITY,
    payload: {
        activity
    }
});

export const login = (email, password) => {
    return (dispatch) => {        
        api.login(email, password).then((res) => {
            dispatch(loginSuccess(
                res.data.token,
                res.data.user          
            ));
        });
    };
};

export const register = (formData) => {
    return (dispatch) => {
        api.register(formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            dispatch(registerSuccess(
                res.data.token,
                res.data.user
            ));
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