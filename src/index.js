import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import 'tachyons'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { searchVerses, verses } from './reducers'


const rootReducers = combineReducers({searchVerses, verses})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, createLogger()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
