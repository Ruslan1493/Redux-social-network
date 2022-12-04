import React from 'react';
import { connect } from 'react-redux';
import { unfollowAC, followAC } from '../Redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            return dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            return dispatch(unfollowAC(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);