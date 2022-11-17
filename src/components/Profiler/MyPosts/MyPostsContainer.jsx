import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profileReducer";
import StoreContext from "../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const addPost = (text) => {
                    store.dispatch(addPostActionCreator(text));
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return <MyPosts
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;