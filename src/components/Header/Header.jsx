import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header = (props) => {
    // console.error('HEADER', props)
    return (
        <header className={style.header}>
            <div>Header</div>
            <div className={style.authHeader}>{props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}</div>
        </header>
    )
}

export default Header;