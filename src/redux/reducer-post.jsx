const ADD_POST = 'ADD-POST';
const NEW_UPDATE_POST_TEXT = 'NEW-UPDATE-POST-TEXT';

const reducetDialog = (state, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                write: state.newUpdatePosts,
                Like: 0,
            };

            state.postData.push(newPost);
            state.newUpdatePosts = '';
            return state;
        }
        case NEW_UPDATE_POST_TEXT: {
            state.newUpdatePosts = action.newText;
            return state;
        }
        default: {
            return state;
        }
    }
}
export const addPostActionCreate = () => ({ type: ADD_POST });
export const newUpdatePostActionCreate = (text) => ({ type: NEW_UPDATE_POST_TEXT, newText: text });

export default reducetDialog;