import React from "react";
import style from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {


    return (
        <div className={style.content}>
            <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" />
            <div className={style.postWrapper}>
                <MyPosts
                    state={props.state}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                    newPostText={props.newPostText}
                />
            </div>
        </div >
    )
}

export default Profile;