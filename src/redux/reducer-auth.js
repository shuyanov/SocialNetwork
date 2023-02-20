import userAPI from "../API/api";

const SET_AUNT_USERS_DATA = 'SET_AUNT_USERS_DATA';
let initialState = {
    id: null,
    email: null,
    login: 1,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUNT_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default: {
            return state;
        }
    }
}

export const getHeader = () => {
    return (dispatch) => {
        userAPI.getHeader()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    ;
    }
}



export const setAuthUserData = (userId, email, login) => ({ type: SET_AUNT_USERS_DATA, data: { userId, email, login } });
export default authReducer;