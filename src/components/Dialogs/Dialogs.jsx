import React from "react";
import { Link } from "react-router-dom";
import style from "./Dialogs.module.scss";

const DialogItem = (props) => {
    return <div className={style.dialog}>
        <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
    </div >
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.state.dialogsData.map((data, i) => {
                    return <DialogItem id={data.id} name={data.name} key={i} />
                })}
            </div>
            <div className={style.messages}>
                {props.state.messagesData.map((data, i) => {
                    return <Message message={data.message} key={i} />
                })}
            </div>
        </div>
    )
};

export default Dialogs;