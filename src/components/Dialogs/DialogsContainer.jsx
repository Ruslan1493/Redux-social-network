import Dialogs from "./Dialogs";
import { sendMessageActionCreator } from "../Redux/dialogsReducer";
import { connect } from "react-redux";
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text));
        },
        // updateNewMessageBody: (text) => {
        //     dispatch(updateNewMessageBodyActionCreator(text));
        // }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);