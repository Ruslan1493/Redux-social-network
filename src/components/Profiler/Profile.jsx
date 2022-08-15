import React from "react";
import style from "./Profile.module.scss";
import MyPost from "./MyPost/MyPost";
import CreatePost from "./CreatePost/CreatePost";

const Profile = (props) => {

    return (
        <div className={style.content}>
            <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" />
            <div className={style.postWrapper}>
                <p>My Posts</p>
                <CreatePost />
                <div className={style.posts}>
                    {props.state.myPostData.map((data, i) => {
                        return <MyPost likesCount={data.likesCount} title={data.title} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile;