import React from 'react';
import { setAuthUserData } from '../Redux/auth-reducer';
import { connect } from 'react-redux';

// Services
import { authAPI } from '../../api/api';

import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    const { id, email, login } = response.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);