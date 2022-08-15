
let state = {
    profilePage: {
        myPostData: [
            { id: 0, title: "First Post", likesCount: 0 },
            { id: 1, title: "Second Post", likesCount: 0 },
            { id: 2, title: "Third Post", likesCount: 0 }
        ]
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
};

export default state;