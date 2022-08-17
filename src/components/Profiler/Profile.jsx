import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
                </div>
            </div>
        </div>
    )
}

export default Profile;