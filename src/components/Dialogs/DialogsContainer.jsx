import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../Redux/dialogsReducer";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text));
    }

    const onSendMessageClick = (text) => {
        props.store.dispatch(sendMessageActionCreator(text));
    }

    return <Dialogs
        sendMessage={onSendMessageClick}
        updateNewMessageBody={onChangeMessage}
        dialogsPage={state} />
};

export default DialogsContainer;