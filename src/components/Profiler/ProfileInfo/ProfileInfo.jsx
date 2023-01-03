import React from "react";
import style from "../Profile.module.scss";

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div className={style.content}>
            <img className={style.profileImage} src={props.profile.photos.large} />
            <div>
                <p>Name: {props.profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;