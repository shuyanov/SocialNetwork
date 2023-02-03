const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_CURRENT_PAGE = 'SET_USERS_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGET_IS_FETCHING = "TOGGET_IS_FETCHING";


let initialState = {
    usersData: [],

    pageSize: 5,
    totalUsersCount: 10,
    currenPage: 1,
    isFetching: true,
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
            return { ...state, currenPage: action.currenPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            //return { ...state, totalUsersCount: action.сount}
            return { ...state, totalUsersCount: 20}
        }
        case TOGGET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default: {
            return state;
        }
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setUsersCurrentPage = (currenPage) => ({ type: SET_USERS_CURRENT_PAGE, currenPage: currenPage });
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, сount: totalUsersCount });
export const toogleisFetching = (isFetching) => ({ type: TOGGET_IS_FETCHING, isFetching: isFetching });

export default reducetUsers;