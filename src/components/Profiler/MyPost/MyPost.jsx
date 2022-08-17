import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import style from "./MyPost.module.scss";

const MyPost = (props) => {

    return (
        <div>
            <div className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
                {props.title}
                <div className="likes">Likes: {props.likesCount}</div>
                <div className="likeBtn">Like</div>
=======
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
import style from "./MyPost.module.css";

const MyPost = () => {

    return(
        <div>
            <div className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
                post 1
                <span className="likeBtn">Like</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
            </div>
        </div>
    )
};

export default MyPost;