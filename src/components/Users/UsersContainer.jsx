import React from 'react';
import { connect } from 'react-redux';
import { unfollowAC, followAC, setUsersAC } from '../Redux/usersReducer';
import Users from './UserC';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            console.error('follow ')
            return dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            return dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            return dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);