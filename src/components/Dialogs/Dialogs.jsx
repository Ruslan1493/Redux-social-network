import React from "react";
import { Link } from "react-router-dom";
import style from "./Dialogs.module.scss";

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <Link to="/dialogs/1">Yugo</Link>
                </div>
                <div className={style.dialog}>
                    <Link to="/dialogs/2">Ben</Link>
                </div>
                <div className={style.dialog}>
                    <Link to="/dialogs/3">Greg</Link>
                </div>
                <div className={style.dialog}>
                    <Link to="/dialogs/4">Anna</Link>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
<<<<<<< HEAD
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
            </div>
        </div>
    )
};

export default Dialogs;