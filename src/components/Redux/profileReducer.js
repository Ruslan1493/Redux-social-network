// Services
import { usersAPI } from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 0, message: "First Post", likesCount: 0 },
        { id: 1, message: "Second Post", likesCount: 0 },
        { id: 2, message: "Third Post", likesCount: 0 }
    ],
    newPostText: 'enter yout text',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5, message: action.newText, likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


/* Thunks */
export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            console.error('data', data);
            dispatch(setUserProfile(data));
        })
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //     .then(response => {
    //         this.props.setUserProfile(response.data);
    //     });
}

export default profileReducer;