import React from "react";
import style from "./Profile.module.scss";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from '../../components/common/Preloader';

const Profile = (props) => {
    console.error('props', props)
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;