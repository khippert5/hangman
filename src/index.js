import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Reducers
import reducer from './client/reducers';

// Styles
import './client/css/index.css';

// Containers
import { App } from './client/containers/App';

// Workers
import * as serviceWorker from './serviceWorker';

window.hangman = window.hangman || {};

const middleware = [thunk];

const { NODE_ENV } = process.env;

// Set env
if ((NODE_ENV && NODE_ENV !== 'production') || window.location.host.indexOf('localhost')) {
  middleware.push(createLogger());
}

const STORE = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={STORE}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
