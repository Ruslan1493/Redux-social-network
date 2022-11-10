import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state, action);
        this._callSubscriber(this._state);
    }
}

export default store;