const ADD_POST = 'ADD-POST';
const NEW_UPDATE_POST_TEXT = 'NEW-UPDATE-POST-TEXT';

let initialState = {
    newPostsText: 'Write the post',

    postData: [
        { id: 1, write: "it's my first post", Like: 15 },
        { id: 2, write: "HI ;) it's my second post", Like: 18 },
        { id: 3, write: "it's my cat", Like: 182 },
        { id: 4, write: "FUCK YOU", Like: 182 }
    ],
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

            // stateCopy.postData = [...state.postData];
            // stateCopy.postData.push(newPost);
            // stateCopy.newPostsText = '';
            // return stateCopy;
        }
        case NEW_UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostsText: action.newText
            };
            // stateCopy.newPostsText = action.newText;
            // return stateCopy;
        }
        default: {
            return state;
        }
    }
}
export const addPostActionCreate = () => ({ type: ADD_POST });
export const newUpdatePostActionCreate = (text) => ({ type: NEW_UPDATE_POST_TEXT, newText: text });

export default reducetProfile;