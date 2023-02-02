import React from "react";
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
                        <div>
                            <img src={u.small != null ? u.photos.small : userPhoto} className={userDisign.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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