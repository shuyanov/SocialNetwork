import {combineReducers, createStore} from "redux";

import reducetProfile from './reducer-post'
import reducetDialog from './reducer-dialog'
import reducerSaidBar from './reducer-saidbar'


let reducers = combineReducers( // объединяем все reducers; 
    {
        // объект состоит из ключ-значения, похож на state
        PostsElements: reducetProfile,
        DialogElements: reducetDialog,
        SaidBar: reducerSaidBar,
    }
);

let store = createStore(reducers);

export default store;