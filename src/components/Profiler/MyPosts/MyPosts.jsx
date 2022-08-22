import React, { useRef } from "react";
import style from "./MyPost.module.scss";
import Post from "../Post/Post";

const MyPosts = (props) => {
    const textElement = useRef();

    const addPost = () => {
        const message = textElement.current.value;
        props.addPost(message);
    }
    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div className={style.createPostWrapper}>
                        <p>New Post</p>
                        <textarea ref={textElement}></textarea>
                        <button
                            className={style.createPostBtn}
                            onClick={addPost}
                        >Create</button>
                    </div>
                </div>
                <div>
                    {props.state.myPostData.map((data, i) => {
                        return <Post likesCount={data.likesCount} message={data.message} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
};

export default MyPosts;