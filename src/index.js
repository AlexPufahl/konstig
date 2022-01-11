import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import getFireStoreData from './config/getFireStoreData';

getFireStoreData()

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);