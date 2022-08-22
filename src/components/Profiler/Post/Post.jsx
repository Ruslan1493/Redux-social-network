import React from "react";
import style from "./Post.module.scss";

const Post = (props) => {

    return (
        <div className={style.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
            {props.message}
            <div className="likes">Likes: {props.likesCount}</div>
            <div className="likeBtn">Like</div>
        </div>
    )
};

export default Post;