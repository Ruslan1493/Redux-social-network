const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            myPostData: [
                { id: 0, message: "First Post", likesCount: 0 },
                { id: 1, message: "Second Post", likesCount: 0 },
                { id: 2, message: "Third Post", likesCount: 0 }
            ],
            newPostText: 'enter yout text',
        },
        dialogsPage: {
            dialogs: [
                { id: 0, name: "Frazel" },
                { id: 1, name: "Bob" },
                { id: 2, name: "Ann" },
                { id: 3, name: "Tommy" },
            ],
            messages: [
                { id: 0, message: "Hi" },
                { id: 1, message: "How are you?" },
                { id: 2, message: "Yo" },
                { id: 3, message: "Hey" },
            ],
            newMessageBody: '',
        },
        sidebar: {
            friendsList: [
                { id: 0, name: "Alex" },
                { id: 1, name: "Jim" },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5, message: action.newText, likesCount: 0
            }
            this._state.profilePage.myPostData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            const body = action.body;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });

export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, body: text });

export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default store;