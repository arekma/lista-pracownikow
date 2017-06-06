import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import {
  input_0,
  input_1,
  initialEmployees
} from './res/strings';

let inputs = {
    name:input_0,
    surname:input_1
  },
  focusedElement = { index:0 },
  employees = [...initialEmployees],
  invalidFields = [];

const store = createStore( allReducers,
  { employees, inputs, focusedElement, invalidFields });

ReactDOM.render((
  <Provider store={ store }>
    <App />
  </Provider>
), document.getElementById('root'))

registerServiceWorker();
