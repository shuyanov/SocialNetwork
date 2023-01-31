import {combineReducers, createStore} from "redux";

import reducetProfile from './reducer-post'
import reducetDialog from './reducer-dialog'
import reducerSaidBar from './reducer-saidbar'
import reducetUsers from "./reducer-users";


let reducers = combineReducers( // объединяем все reducers; 
    {
        // объект состоит из ключ-значения, похож на state
        PostsElements: reducetProfile,
        DialogElements: reducetDialog,
        SaidBar: reducerSaidBar,
        UsersElement: reducetUsers,
    }
);

let store = createStore(reducers);

export default store;