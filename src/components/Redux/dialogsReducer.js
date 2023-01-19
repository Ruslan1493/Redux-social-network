const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const body = action.body;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, body: text });

export default dialogsReducer;