import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import * as serviceWorker from './serviceWorker';
import { searchVerses, verses, popup, subContent } from './reducers'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import 'tachyons'


const rootReducers = combineReducers({searchVerses, verses, popup, subContent})

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
