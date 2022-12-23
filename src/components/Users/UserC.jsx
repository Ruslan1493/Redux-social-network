import React from 'react';
import axios from 'axios';
import userImg from '../../assets/avatar.png';
import style from './User.module.scss';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    console.error(response.data.items)
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers}>Get users</button> */}
                <div>Users</div>
                {this.props.users && this.props.users.map(u => {
                    return <div>
                        <div className={style.userAvatar}>
                            <img src={u.photos.small != null ? u.photos.small : userImg} className={style.userStyles} />
                            {console.log('u.followed', u.followed)}
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                        <div>
                            <div>
                                <span>{u.name}</span>
                                <span>{u.status}</span>
                            </div>
                            {/* <div>
                            <span>{u.location.country}</span>
                            <span>{u.location.city}</span>
                        </div> */}
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default Users;