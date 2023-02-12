import React from 'react';
import { connect } from 'react-redux';
import { follow, setTotalUserCount, setUsers, setUsersCurrentPage, toogleisFetching, unfollow } from '../../redux/reducer-users';
import Users from './Users';
import axios from 'axios';
import Preloader from '../common/Preloder/Preloader';

class UsersComponentAPI extends React.Component {
  componentDidMount() {
    this.props.toogleisFetching(true);
    //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.totalUsersCount}`)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${2}&count=${20}`,{
      withCredentials: true
    })
      .then(response => {
        this.props.toogleisFetching(false);
        this.props.setUsers(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {//идет запрос при нажатии кнопки
    this.props.setUsersCurrentPage(pageNumber)
    this.props.toogleisFetching(true);
    //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${2}&count=${20}`,{
      withCredentials: true
    })
      .then(response => {
        this.props.toogleisFetching(false);
        this.props.setUsers(response.data.items)
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currenPage={this.props.currenPage}
        onPageChanged={this.onPageChanged}
        usersData={this.props.usersData}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.UsersElement.usersData,

    pageSize: state.UsersElement.pageSize,
    totalUsersCount: state.UsersElement.totalUsersCount,
    currenPage: state.UsersElement.currenPage,
    isFetching: state.UsersElement.isFetching,
  }
}
// пример
//прокидываем пропсы, но сейчас мы это делаем напрямую
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => { dispatch(followAC(userId)); },
//     unfollow: (userId) => { dispatch(unfollowAC(userId)); },
//     setUsers: (usersData) => { dispatch(setUsersAC(usersData)); },
//     setUsersPage: (usersData) => { dispatch(setUsersAC(usersData)); },
//     setUsersCurrentPage: (pageNumber) => { dispatch(setUsersCurrentPageAC(pageNumber)); },
//     setTotalUserCount: (totalCount) => { dispatch(setTotalUserCountAC(totalCount)); },
//     toogleisFetching: (isFetching) => {dispatch(toggalIsFetchingAC(isFetching))}
//   }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setUsersCurrentPage, setTotalUserCount, toogleisFetching, },)(UsersComponentAPI);