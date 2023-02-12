import {combineReducers, createStore} from "redux";

import reducerProfile from './reducer-post'
import reducetDialog from './reducer-dialog'
import reducerSaidBar from './reducer-saidbar'
import reducetUsers from "./reducer-users";
import authReducer from "./reducer-auth";

let reducers = combineReducers( // объединяем все reducers; 
    {
        // объект состоит из ключ-значения, похож на state
        PostsElements: reducerProfile,
        DialogElements: reducetDialog,
        SaidBar: reducerSaidBar,
        UsersElement: reducetUsers,
        AuthElement: authReducer,
    }
);

let store = createStore(reducers);
window.store = store;

export default store;