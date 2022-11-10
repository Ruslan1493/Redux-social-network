import React from "react";
import { Link } from "react-router-dom";
import style from "./Dialogs.module.scss";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../Redux/dialogsReducer";
import { useRef } from "react";

const DialogItem = (props) => {
    return <div className={style.dialog}>
        <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
    </div >
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}


const Dialogs = (props) => {

    const nameElement = useRef();
    
    const onChangeMessage = (e) => {
        const text = e.target;
        props.dispatch(updateNewMessageBodyActionCreator(text));
    }

    const onSendMessageClick = (e) => {
        const text = nameElement.current.value;
        console.log(text);
        props.dispatch(sendMessageActionCreator(text));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div>
                    {props.state.dialogs.map((data, i) => {
                        return <DialogItem id={data.id} name={data.name} key={i} />
                    })}
                </div>
            </div>
            <div className={style.messages}>
                <div>
                    {props.state.messages.map((data, i) => {
                        return <Message message={data.message} key={i} />
                    })}
                </div>
                <div>
                    <div><textarea ref={nameElement} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;