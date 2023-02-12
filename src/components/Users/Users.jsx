import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from './../../assets/images/user.jpg'
import userDisign from './Users.module.css'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span
                            onClick={(e) => { props.onPageChanged(p) }}
                            className={props.currenPage === p && userDisign.stylePage}> {p} </span>
                    })
                }
            </div>
            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <div>
                                <img src={u.small != null ? u.photos.small : userPhoto} className={userDisign.userPhoto} />
                            </div>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY' : '3ca66285-a17e-478c-8427-4e5ffbf8bfbb'}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY' : '3ca66285-a17e-478c-8427-4e5ffbf8bfbb'}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span >
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    )
}

export default Users;