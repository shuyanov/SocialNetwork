import React from 'react';
import userDisign from './Users.module.css'

const Users = (props) => {

  debugger;
  //(props.users.length === 0)
  if(props.usersData.length === 0){
        props.setUsers(
           [
            {
                id: 1, imageUser: 'https://memepedia.ru/wp-content/uploads/2019/11/malysh-joda-3.jpg'
                , name: 'Max', status: "it's my status", followed: true, location: { city: 'Vichuga', country: 'Russua' }
            },
            {
                id: 2, imageUser: 'https://memepedia.ru/wp-content/uploads/2019/11/malysh-joda-3.jpg'
                , name: 'MaxClone', status: "it's my", followed: false, location: { city: 'Moscow', country: 'Russua' }
            },
            {
                id: 3, imageUser: 'https://memepedia.ru/wp-content/uploads/2019/11/malysh-joda-3.jpg'
                , name: 'MaxClone2', status: "it's my action", followed: true, location: { city: 'Ivanovo', country: 'Russua' }
            },
            {
                id: 4, imageUser: 'https://memepedia.ru/wp-content/uploads/2019/11/malysh-joda-3.jpg'
                , name: 'MaxClone3', status: "it's my adventure", followed: false, location: { city: 'Vladimir', country: 'Russua' }
            },
        ]
        )
  }

  return (
    <div>
      {
        props.usersData.map(u => // хотим для каждого пользователья вернуть 
          <div key={u.id}>
            <span>
              <div>
                <img src={u.imageUser} className={userDisign.userPhoto}/>
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
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users;