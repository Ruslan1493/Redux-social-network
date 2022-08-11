import React from "react";
<<<<<<< HEAD
import style from "./MyPost.module.css";

const MyPost = () => {

    return(
        <div>
            <div className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
                post 1
                <span className="likeBtn">Like</span>
=======
import style from "./MyPost.module.scss";

const MyPost = (props) => {

    return (
        <div>
            <div className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
                {props.title}
                <div className="likes">Likes: {props.likesCount}</div>
                <div className="likeBtn">Like</div>
>>>>>>> 7e37282cd18c125945d5d105a63fce4a3b37a09f
            </div>
        </div>
    )
};

export default MyPost;