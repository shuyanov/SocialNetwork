import {applyMiddleware, combineReducers, createStore} from "redux";

import reducerProfile from './reducer-post';
import reducetDialog from './reducer-dialog';
import reducerSaidBar from './reducer-saidbar';
import reducetUsers from "./reducer-users";
import authReducer from "./reducer-auth";
import thunkMiddleware from 'redux-thunk';


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

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;