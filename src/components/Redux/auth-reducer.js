import { stopSubmit } from 'redux-form';
import { authAPI } from '../../api/api';

const SET_AUTH_USER_DATA = 'ADD-SET_AUTH_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response?.resultCode === 0) {
                const { id, email, login } = response?.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then(response => {

            if (response?.data?.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                const message = response?.data?.messages?.length > 0 ? response?.data?.messages[0] : 'Some error';
                dispatch(stopSubmit('login', { _error: message }));
            }
        });
}

export const logout = () => (dispatch) => {
    return authAPI.logout()
        .then(response => {
            if (response?.data?.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;