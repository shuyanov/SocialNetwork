import reducetDialog from "./reducer-dialog";
import reducetProfile from "./reducer-post";
import reducerSaidBar from "./reducer-saidbar";

let store = {
    _state: {

        PostsElements: {
            newUpdatePosts: 'Write the post',

            postData: [
                { id: 1, write: "it's my first post", Like: 15 },
                { id: 2, write: "HI ;) it's my second post", Like: 18 },
                { id: 3, write: "it's my cat", Like: 182 },
                { id: 4, write: "FUCK YOU", Like: 182 }
            ],
        },

        DialogElements: {
            newUpdateDialog: 'Write your massag',

            DialogsData: [
                { id: 1, user: "Max" },
                { id: 2, user: "CloneMax1" },
                { id: 3, user: "CloneMax2" },
                { id: 4, user: "CloneMax3" },
                { id: 5, user: "CloneMax4" },
            ],
            MassagData: [
                { id: 1, massag: "Hello" },
                { id: 2, massag: "How are you" },
                { id: 3, massag: "Yop" },
                { id: 4, massag: "Watsap" },
                { id: 5, massag: "you good look" },

            ],
        },

        SaidBar: {

        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    

    dispatch(action) {// type: ...
        debugger;
        this._state.PostsElements = reducetProfile(this._state.PostsElements, action);
        this._state.DialogElements = reducetDialog(this._state.DialogElements, action);
        this._state.SaidBar = reducerSaidBar(this._state.SaidBar, action);

        this._callSubscriber(this._state);
    },
}
export default store;