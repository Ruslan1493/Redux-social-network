import React from "react";
<<<<<<< HEAD
import style from "./Profile.module.css";
=======
import style from "./Profile.module.scss";
>>>>>>> 7e37282cd18c125945d5d105a63fce4a3b37a09f
import MyPost from "./MyPost/MyPost";
import CreatePost from "./CreatePost/CreatePost";

const Profile = () => {
<<<<<<< HEAD
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
=======
    const myPostData = [
        { id: 0, title: "First Post", likesCount: 0 },
        { id: 1, title: "Second Post", likesCount: 0 },
        { id: 2, title: "Third Post", likesCount: 0 }
    ];

    return (
        <div className={style.content}>
            <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" />
            <div className={style.postWrapper}>
                <p>My Posts</p>
                <CreatePost />
                <div className={style.posts}>
                    {myPostData.map((data, i) => {
                        return <MyPost likesCount={data.likesCount} title={data.title} key={i} />
                    })}
>>>>>>> 7e37282cd18c125945d5d105a63fce4a3b37a09f
                </div>
            </div>
        </div>
    )
}

export default Profile;