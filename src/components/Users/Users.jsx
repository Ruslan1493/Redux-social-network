import React from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../../assets/avatar.png';

//Services
import { usersAPI } from '../../api/api';

//Styles
import style from './User.module.scss';

const Users = (props) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        if (i >= 51) {
            break;
        }
        pages.push(i);
    }

    const handleFollow = (userId) => {
        props.follow(userId);
    }

    const handleUnfollow = (userId) => {
        props.unfollow(userId);
    }

    return (
        <div>
            <div className={style.pagesContainer}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? style.selectedPage : ''}
                            onClick={() => props.handleSetCurrentPage(p)}>{p}</span>
                    })
                }
            </div>
            <h2>Users</h2>
            {props.users && props.users.map(u => {
                return <div>
                    <div className={style.userAvatar}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userImg} className={style.userStyles} />
                        </NavLink>
                        {u.followed ?
                            <button
                                disabled={props.followingInProgress.includes(u.id)}
                                onClick={() => handleUnfollow(u.id)}>Unfollow</button> :
                            <button
                                disabled={props.followingInProgress.includes(u.id)}
                                onClick={() => handleFollow(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <div>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Users;