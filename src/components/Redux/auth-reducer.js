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
            console.error('reducer', action.data)
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } });

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                const { id, email, login } = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;