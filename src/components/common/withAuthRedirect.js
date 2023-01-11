import React from 'react';
import { Navigate } from "react-router-dom";
import { compose } from 'redux';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to='/login' />
        }
        return (
            <Component {...props} />
        )
    }

    const AuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return AuthRedirectComponent;
    // export default compose()(withAuthRedirect);
}

export default withAuthRedirect;
