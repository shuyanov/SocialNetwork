import React from 'react';
import { connect } from 'react-redux';
import { followAC, setTotalUserCountAC, setUsersAC, setUsersCurrentPageAC, unfollowAC } from '../../redux/reducer-users';
import Users from './Users';

import axios from 'axios';

class UsersComponentAPI extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.totalUsersCount}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setUsersCurrentPage(pageNumber)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  }

  render() {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currenPage={this.props.currenPage}
      onPageChanged={this.onPageChanged}
      usersData={this.props.usersData}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.UsersElement.usersData,

    pageSize: state.UsersElement.pageSize,
    totalUsersCount: state.UsersElement.totalUsersCount,
    currenPage: state.UsersElement.currenPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)); },
    unfollow: (userId) => { dispatch(unfollowAC(userId)); },
    setUsers: (usersData) => { dispatch(setUsersAC(usersData)); },
    setUsersPage: (usersData) => { dispatch(setUsersAC(usersData)); },
    setUsersCurrentPage: (pageNumber) => { dispatch(setUsersCurrentPageAC(pageNumber)); },
    setTotalUserCount: (totalCount) => { dispatch(setTotalUserCountAC(totalCount)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponentAPI);