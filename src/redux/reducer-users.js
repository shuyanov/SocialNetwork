import userAPI from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_CURRENT_PAGE = 'SET_USERS_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGET_IS_FETCHING = "TOGGET_IS_FETCHING";
const IS_FETCHING_BUTTON_FOLLOWING = "IS_FETCHING_BUTTON";

let initialState = {
    usersData: [],
    contacts: [],
    pageSize: 5,
    totalUsersCount: 20,
    currenPage: 1,
    isFetching: true,
    isFetchingButtonFollow: [],
};

const reducetUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }
                )
            }
        case SET_USERS: {
            return { ...state, usersData: action.usersData }
        }
        case SET_USERS_CURRENT_PAGE: {
            return { ...state, currenPage: action.currenPage }
        }
        case SET_USERS_TOTAL_COUNT: {
            //return { ...state, totalUsersCount: action.сount}
            return { ...state, totalUsersCount: 50 }
        }
        case TOGGET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case IS_FETCHING_BUTTON_FOLLOWING: {
            return {
                ...state,
                isFetchingButtonFollow: action.isFetching
                    ? [...state.isFetchingButtonFollow, action.userId]
                    : state.isFetchingButtonFollow.filter(id => id != action.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setUsersCurrentPage = (currenPage) => ({ type: SET_USERS_CURRENT_PAGE, currenPage: currenPage });
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, сount: totalUsersCount });
export const toogleisFetching = (isFetching) => ({ type: TOGGET_IS_FETCHING, isFetching });
export const toogleFollowProgress = (isFetching, userId) => ({ type: IS_FETCHING_BUTTON_FOLLOWING, isFetching, userId });

export const getUser = (currenPage, totalUsersCount) => {
    return (dispatch) => {
        dispatch(toogleisFetching(true))
        userAPI.getUser(currenPage, totalUsersCount)
            .then(data => {
                dispatch(setUsersCurrentPage(currenPage));
                dispatch(toogleisFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowProgress(true, userId))
        userAPI.getUserButtonFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toogleFollowProgress(false, userId));
            });
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowProgress(true, userId))
        userAPI.getUserButtonUnfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toogleFollowProgress(false, userId));
            });
    }
}

export default reducetUsers;