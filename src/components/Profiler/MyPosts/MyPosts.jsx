import React, { useRef } from "react";
import style from "./MyPost.module.scss";
import Post from "../Post/Post";
import { Element } from '../../common/FormsControl/FormsControl';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLength } from "../../../utils/validators/validators";


const MyPosts = (props) => {
    let handleAddPost = (values) => {
        const text = values.message;
        props.addPost(text);
    }

    return (
        <div>
            <div className={style.postsBlock}>
                <h3>My Posts</h3>
                <ProfileMessageReduxForm onSubmit={handleAddPost} />
                <div>
                    {props.posts.map((data, i) => {
                        return <Post likesCount={data.likesCount} message={data.message} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
};

const Textarea = Element('textarea');

const PostForm = (props) => {
    const { reset, handleSubmit } = props;
    const maxLength10 = maxLength(10);
    return (
        <form onSubmit={handleSubmit} className={style.createPostWrapper}>
            <p>New Post</p>
            <Field
                placeholder='wright something...'
                name={'message'}
                component={Textarea}
                validate={[requiredField, maxLength10]}
            />
            <button>Create</button>
        </form>
    )
}

const ProfileMessageReduxForm = reduxForm({
    form: 'profileMessage'
})(PostForm)

export default MyPosts;