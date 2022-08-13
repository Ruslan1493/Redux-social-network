import React, { useState } from 'react';
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <nav className={style.navigation}>
            <ul>
                <li><Link to="/profile" className={style.item}>Profile</Link></li>
                <li><Link to="/dialogs">Messages</Link></li>
                <li><Link to="#">News</Link></li>
                <li><Link to="#">Music</Link></li>
                <li><Link to="#">Settings</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;