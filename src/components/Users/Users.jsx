import React from 'react';

const Users = (props) => {
    return (
        <div>
            <div>Users</div>
            {props.users && props.users.map(u => {
                return <div>
                    <div>
                        <img src={u.imageUrl} />
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <div>
                            <span>{u.fullname}</span>
                            <span>{u.status}</span>
                        </div>
                        <div>
                            <span>{u.location.country}</span>
                            <span>{u.location.city}</span>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Users;