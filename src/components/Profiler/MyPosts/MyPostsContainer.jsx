import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profileReducer";
import StoreContext from "../../StoreContext";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 const addPost = (text) => {
//                     store.dispatch(addPostActionCreator(text));
//                 }

//                 const onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 }

//                 return <MyPosts
//                     addPost={addPost}
//                     updateNewPostText={onPostChange}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;