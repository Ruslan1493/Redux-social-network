import Dialogs from "./Dialogs";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../Redux/dialogsReducer";
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
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text));
        }
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);