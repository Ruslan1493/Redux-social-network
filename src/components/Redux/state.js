const ADD_POST = 'ADD-POST';

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
            dialogsData: [
                { id: 0, name: "Frazel" },
                { id: 1, name: "Bob" },
                { id: 2, name: "Ann" },
                { id: 3, name: "Tommy" },
            ],
            messagesData: [
                { id: 0, message: "Hi" },
                { id: 1, message: "How are you?" },
                { id: 2, message: "Yo" },
                { id: 3, message: "Hey" },
            ],
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
    dispatch(action) {
        if(action.type === ADD_POST){
            const newPost = {
                id: 5, message: action.newText, likesCount: 0
            }
    
            this._state.profilePage.myPostData.push(newPost);
            this._callSubscriber(this._state);
        }
    },
    addPost(newText) {
        const newPost = {
            id: 5, message: newText, likesCount: 0
        }

        this._state.profilePage.myPostData.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
}

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});

export default store;