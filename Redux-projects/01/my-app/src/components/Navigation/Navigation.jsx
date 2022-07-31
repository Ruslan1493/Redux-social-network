import React from 'react';
import style from "./Navigation.module.css";

const Navigation = () => {

    return (
        <nav className={style.navigation}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;