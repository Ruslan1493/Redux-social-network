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

    const dialogsData = [
        { id: 0, name: "Frazel" },
        { id: 1, name: "Bob" },
        { id: 2, name: "Ann" },
        { id: 3, name: "Tommy" },
    ];

    const messagesData = [
        { id: 0, message: "Hi" },
        { id: 1, message: "How are you?" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Hey" },
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsData.map((data, i) => {
                    return <DialogItem id={data.id} name={data.name} key={i} />
                })}
            </div>
            <div className={style.messages}>
                {messagesData.map((data, i) => {
                    return <Message message={data.message} key={i} />
                })}
            </div>
        </div>
    )
};

export default Dialogs;