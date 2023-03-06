import {applyMiddleware, combineReducers, createStore} from "redux";

import reducerProfile from './reducer-post';
import reducetDialog from './reducer-dialog';
import reducerSaidBar from './reducer-saidbar';
import reducetUsers from "./reducer-users";
import authReducer from "./reducer-auth";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers( // объединяем все reducers; 
    {
        // объект состоит из ключ-значения, похож на state
        PostsElements: reducerProfile,
        DialogElements: reducetDialog,
        SaidBar: reducerSaidBar,
        UsersElement: reducetUsers,
        AuthElement: authReducer,
        form: formReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;