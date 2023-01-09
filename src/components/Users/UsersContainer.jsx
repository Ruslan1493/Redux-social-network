import React from 'react';
import { connect } from 'react-redux';

//Actions
import { unfollow, follow, setUsers, setCurrentPage, setUsersTotalCount, getUsersThunk } from '../Redux/usersReducer';

//Components
import Users from './Users';
import Preloader from '../common/Preloader';

// Services
import { usersAPI } from '../../api/api';

//Styles
import style from './User.module.scss';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    handleSetCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                handleSetCurrentPage={this.handleSetCurrentPage}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    getUsers: getUsersThunk
})(UsersAPIComponent);