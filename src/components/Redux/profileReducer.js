const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5, message: action.newText, likesCount: 0
            }
            state.myPostData.push(newPost);
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }
    return state;
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });

export default profileReducer;