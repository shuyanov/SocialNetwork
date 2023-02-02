const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_CURRENT_PAGE = 'SET_USERS_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';


let initialState = {
    usersData: [],

    pageSize: 5,
    totalUsersCount: 10,
    currenPage: 1,
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
        default: {
            return state;
        }
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (usersData) => ({ type: SET_USERS, usersData });
export const setUsersCurrentPageAC = (currenPage) => ({ type: SET_USERS_CURRENT_PAGE, currenPage: currenPage });
export const setTotalUserCountAC = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, сount: totalUsersCount });

export default reducetUsers;