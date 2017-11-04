import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/sagas'
import { usersData } from './reducers/usersData';
import { loadState, saveState } from './utils/localStorage';
import App from './App';
import './index.css';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    form: formReducer,
    usersData: usersData,
});

const persistedState = loadState();
let store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(sagaMiddleware),
);
store.subscribe(() =>{
    saveState({
        usersData: store.getState().usersData
    });
});


sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

