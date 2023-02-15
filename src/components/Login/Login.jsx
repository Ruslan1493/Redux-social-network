import { Field, reduxForm } from "redux-form"
import { Element } from "../common/FormsControl/FormsControl"
import { connect } from "react-redux"
import { login } from "../Redux/auth-reducer";
import style from "../common/FormsControl/FormsControl.module.scss";

const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' placeholder='Email' name={'email'} component={Input} />
            </div>
            <div>
                <Field type='password' placeholder='Password' name={'password'} component={Input} />
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} component={Input} /> Remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Input = Element('input');

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (<div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
    )
}

export default connect(null, { login })(Login);