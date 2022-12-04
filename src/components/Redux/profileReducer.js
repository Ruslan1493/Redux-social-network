const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        { id: 0, message: "First Post", likesCount: 0 },
        { id: 1, message: "Second Post", likesCount: 0 },
        { id: 2, message: "Third Post", likesCount: 0 }
    ],
    newPostText: 'enter yout text',
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
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;