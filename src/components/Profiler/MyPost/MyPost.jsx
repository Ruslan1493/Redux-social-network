import React from "react";
import style from "./MyPost.module.css";

const MyPost = () => {

    return(
        <div>
            <div className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&usqp=CAU" />
                post 1
                <span className="likeBtn">Like</span>
            </div>
        </div>
    )
};

export default MyPost;