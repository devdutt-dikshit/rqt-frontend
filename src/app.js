import React from 'react';
import ChatApp from './pages/signup';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App(){
    return (
        <Provider store={store}>
            <React.StrictMode>
                <ChatApp/>
            </React.StrictMode>
        </Provider>
    )
}