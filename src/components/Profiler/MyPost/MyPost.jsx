import React from "react";
import style from "./MyPost.module.scss";

const MyPost = (props) => {

    return (
        <div>
            <div className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
                {props.title}
                <div className="likes">Likes: {props.likesCount}</div>
                <div className="likeBtn">Like</div>
            </div>
        </div>
    )
};

export default MyPost;