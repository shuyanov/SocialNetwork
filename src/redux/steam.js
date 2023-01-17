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
            DialogsData: [
                { id: 1, user: "Max" },
                { id: 2, user: "CloneMax1" },
                { id: 3, user: "CloneMax2" },
                { id: 4, user: "CloneMax3" },
                { id: 5, user: "CloneMax4" }
            ],
            MassagData: [
                { id: 1, massag: "Hello" },
                { id: 2, massag: "How are you" },
                { id: 3, massag: "Yop" },
                { id: 4, massag: "Watsap" },
                { id: 5, massag: "you good look" }
            ],
        }
    },

    // renderEntireTree() {
    //     console.log("render")
    // },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },

    dispatch(action) {// type: ...
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                write: this._state.PostsElements.newUpdatePosts,
                Like: 0,
            };

            this._state.PostsElements.postData.push(newPost);
            this._state.PostsElements.newUpdatePosts = '';

            this.renderEntireTree(this._state);
        }
        else if (action.type === 'NEW-UPDATE-POST-TEXT') {
            this._state.PostsElements.newUpdatePosts = action.newText;
            this.renderEntireTree(this._state);
        }
    },
}

export default store;