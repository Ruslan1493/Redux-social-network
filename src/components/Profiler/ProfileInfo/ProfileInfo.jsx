import React from "react";
import style from "../Profile.module.scss";

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div className={style.content}>
            <img src={props.profile.photos.large} />
            ava + desc
        </div>
    )
}

export default ProfileInfo;