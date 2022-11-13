import React, { useRef } from "react";
import style from "./MyPost.module.scss";
import Post from "../Post/Post";

const MyPosts = (props) => {
    const newPostElement = useRef();

    const onAddPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = (e) => {
 
    }

    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div className={style.createPostWrapper}>
                        <p>New Post</p>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                        ></textarea>
                        <button
                            className={style.createPostBtn}
                            onClick={onAddPost}
                        >Create</button>
                    </div>
                </div>
                <div>
                    {props.posts.map((data, i) => {
                        return <Post likesCount={data.likesCount} message={data.message} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
};

export default MyPosts;