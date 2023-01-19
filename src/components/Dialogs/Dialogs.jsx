import React from "react";
import { Link } from "react-router-dom";
import style from "./Dialogs.module.scss";
import { Field, reduxForm } from "redux-form";
import { Element } from "../common/FormsControl/FormsControl";
import { requiredField, maxLength } from "../../utils/validators/validators";

const DialogItem = (props) => {
    return <div className={style.dialog}>
        <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
    </div >
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = (props) => {
    const dialogsPage = props.dialogsPage;

    const handleAddMessage = (values) => {
        const text = values.newMessageBody;
        props.sendMessage(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div>
                    {dialogsPage.dialogs.map((data, i) => {
                        return <DialogItem id={data.id} name={data.name} key={i} />
                    })}
                </div>
            </div>
            <div className={style.messages}>
                <div>
                    {dialogsPage.messages.map((data, i) => {
                        return <Message message={data.message} key={i} />
                    })}
                </div>
                <DialogReduxForm onSubmit={handleAddMessage} />
            </div>
        </div>
    )
};
const Textarea = Element('textarea');

const AddMessageForm = (props) => {
    const { reset, handleSubmit } = props;
    const maxLength10 = maxLength(10);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='Enter your message'
                    name='newMessageBody'
                    component={Textarea}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;