import React from 'react';
import { connect } from 'react-redux';
import { getUser, setUsersCurrentPage, toogleFollowProgress, follow, unFollow, toogleisFetching } from '../../redux/reducer-users';
import Users from './Users';
import Preloader from '../common/Preloder/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersComponentAPI extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currenPage, this.props.totalUsersCount)
  }

  onPageChanged = (pageNumber) => {//идет запрос при нажатии кнопки
    this.props.getUser(pageNumber, this.props.totalUsersCount)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        isAuth={this.props.isAuth}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currenPage={this.props.currenPage}
        onPageChanged={this.onPageChanged}
        usersData={this.props.usersData}
        toogleFollowProgress={this.props.toogleFollowProgress}
        isFetchingButtonFollow={this.props.isFetchingButtonFollow}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        setCurrentPage={this.props.currenPage}

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
    isFetchingButtonFollow: state.UsersElement.isFetchingButtonFollow,
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,{ setUsersCurrentPage, toogleFollowProgress, getUser, follow, unFollow, toogleisFetching }),
  )(UsersComponentAPI)