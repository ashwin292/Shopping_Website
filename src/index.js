import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';

import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
    {/* <App /> is wrapped between <BrowserRouter> so that
    it gets all of the functionality of routing */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));
