import React from "react";
import style from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import CreatePost from "./CreatePost/CreatePost";

const Profile = () => {
    return (
        <div className={style.content}>
            <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" />
            {/* // description */}
            <div>
                <p>My Posts</p>
                <CreatePost />
                <div className={style.posts}>
                    <MyPost />
                    <MyPost />
                    <MyPost />
                </div>
            </div>
        </div>
    )
}

export default Profile;