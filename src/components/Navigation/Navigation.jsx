<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.scss";
=======
import React, { useState } from 'react';
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
import React, { useState } from 'react';
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
import React, { useState } from 'react';
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436

const Navigation = () => {

    return (
        <nav className={style.navigation}>
            <ul>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <li><Link to="/profile">Profile</Link></li>
=======
                <li><Link to="/profile" className={style.item}>Profile</Link></li>
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
                <li><Link to="/profile" className={style.item}>Profile</Link></li>
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
                <li><Link to="/profile" className={style.item}>Profile</Link></li>
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
                <li><Link to="/dialogs">Messages</Link></li>
                <li><Link to="#">News</Link></li>
                <li><Link to="#">Music</Link></li>
                <li><Link to="#">Settings</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;