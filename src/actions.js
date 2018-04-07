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