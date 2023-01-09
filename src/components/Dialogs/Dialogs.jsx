import React from "react";
import { Link } from "react-router-dom";
import style from "./Dialogs.module.scss";
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
    const dialogsPage = props.dialogsPage;
    const nameElement = useRef();
    
    const onChangeMessage = (e) => {
        const text = e.target;
        props.updateNewMessageBody(text);
    }

    const onSendMessageClick = (e) => {
        const text = nameElement.current.value;
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
                <div>
                    <div><textarea ref={nameElement} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;