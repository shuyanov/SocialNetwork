const ADD_POST = 'ADD-POST';
const NEW_UPDATE_POST_TEXT = 'NEW-UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const USER_CONTACTS = 'USER_CONTACTS';

let initialState = {
    newPostsText: 'Write the post',

    postData: [
        { id: 1, write: "it's my first post", Like: 15 },
        { id: 2, write: "HI ;) it's my second post", Like: 18 },
        { id: 3, write: "it's my cat", Like: 182 },
        { id: 4, write: "FUCK YOU", Like: 182 }
    ],

    profilePhoto: null,
    userContacts: 'NoData',
}

const reducetProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                write: state.newPostsText,
                Like: 0,
            };
            return {
                ...state,
                newPostsText: '',
                postData: [...state.postData, newPost]
            };
        }
        case NEW_UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostsText: action.newText
            };
        }
        case SET_USERS_PROFILE: {
            return { ...state, profilePhoto: action.profilePhoto };
        }
        case USER_CONTACTS: {
            return { ...state, userContacts: action.userContacts };
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreate = () => ({ type: ADD_POST });
export const newUpdatePostActionCreate = (text) => ({ type: NEW_UPDATE_POST_TEXT, newText: text });
export const setUsersProfile = (profilePhoto) => ({ type: SET_USERS_PROFILE, profilePhoto: profilePhoto });

export const setContacts = (userContacts) => ({ type: USER_CONTACTS, userContacts: userContacts });

export default reducetProfile;