import React from 'react';
import { getAuthUserData } from '../Redux/auth-reducer';
import { connect } from 'react-redux';

// Services
import { authAPI } from '../../api/api';

import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);