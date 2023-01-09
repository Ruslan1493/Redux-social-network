import React from "react";
import style from "../Profile.module.scss";
import userImg from '../../../assets/avatar.png';

const ProfileInfo = (props) => {
    return (
        <div className={style.content}>
            <img className={style.profileImage} src={props.profile.photos.large !== null ? props.profile.photos.large : userImg} />
            <div>
                <p>Name: {props.profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;