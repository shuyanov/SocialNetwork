import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/reducer-users';
import Users from './Users';



let mapStateToProps = (state) => {
  return {
    usersData: state.UsersElement.usersData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)); },
    unfollow: (userId) => { dispatch(unfollowAC(userId)); },
    setUsers: (usersData) => { dispatch(setUsersAC(usersData)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);