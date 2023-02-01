import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = () => {
    root.render(
        <BrowserRouter>
           {/* <React.StrictMode> */}
                <Provider store={store}>
                    <App />
                </Provider>
            {/* </React.StrictMode> */}
        </BrowserRouter>
    );
}
renderEntireTree()
reportWebVitals()

// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state);
// });

// renderEntireTree(store.getState());
// reportWebVitals()


