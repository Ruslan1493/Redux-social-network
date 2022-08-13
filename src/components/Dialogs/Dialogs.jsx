import React from "react";
import { Link } from "react-router-dom";
import style from "./Dialogs.module.scss";

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
            </div>
        </div>
    )
};

export default Dialogs;