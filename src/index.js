import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
    {/* <App /> is wrapped between <BrowserRouter> so that
    it gets all of the functionality of routing */}
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));
