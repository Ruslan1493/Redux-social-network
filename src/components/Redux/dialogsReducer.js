const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.body;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            break;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        default:
            return state;
    }

    return state;
}

export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, body: text });

export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;