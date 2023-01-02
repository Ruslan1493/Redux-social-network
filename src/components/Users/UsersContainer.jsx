import React from 'react';
import { connect } from 'react-redux';
import { unfollow, follow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching } from '../Redux/usersReducer';
import style from './User.module.scss';

import loader from '../../assets/loader.png';
import axios from 'axios';

import Users from './Users';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        console.error('mounted page', this.props.currentPage)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    handleSetCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        console.error('page num', pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                console.error('users', response.data.items)
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <img className={style.loader} style={{ visibility: 'visible' }} src={loader} /> :
                <img className={style.loader} style={{ visibility: 'hidden' }} src={loader} />}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                handleSetCurrentPage={this.handleSetCurrentPage}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setIsFetching,
})(UsersAPIComponent);