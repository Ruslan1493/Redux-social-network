import React, { useRef } from "react";
import style from "./MyPost.module.scss";
import Post from "../Post/Post";
import { addPostActionCreator } from "../../Redux/state";

const MyPosts = (props) => {
    const newPostElement = useRef();

    const addPost = () => {
        const message = newPostElement.current.value;
        props.dispatch(addPostActionCreator(message));
    }

    let onPostChange = () => {
        const message = newPostElement.current.value;
        console.log(message);
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
                        // value={''}
                        ></textarea>
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