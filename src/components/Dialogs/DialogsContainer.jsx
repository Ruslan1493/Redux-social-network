import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../Redux/dialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text));
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;