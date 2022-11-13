import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    console.log(state);

    const addPost = (text) => {
        props.store.dispatch(addPostActionCreator(text));
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
};

export default MyPostsContainer;