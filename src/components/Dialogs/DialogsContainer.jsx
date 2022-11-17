import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../Redux/dialogsReducer";
import StoreContext from "../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;

                const onChangeMessage = (text) => {
                    store.dispatch(updateNewMessageBodyActionCreator(text));
                }

                const onSendMessageClick = (text) => {
                    store.dispatch(sendMessageActionCreator(text));
                }
                return <Dialogs
                    sendMessage={onSendMessageClick}
                    updateNewMessageBody={onChangeMessage}
                    dialogsPage={state} />
            }}
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;