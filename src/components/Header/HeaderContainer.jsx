import React from 'react';
import { getAuthUserData, logout } from '../Redux/auth-reducer';
import { connect } from 'react-redux';

// Services
import { authAPI } from '../../api/api';

import ResponsiveAppBar from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <ResponsiveAppBar {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);