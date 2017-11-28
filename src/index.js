import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { AppContainer } from 'react-hot-loader';

const render = (App) => {
  ReactDOM.render(
  <AppContainer><App /></AppContainer>,
  document.getElementById('root')
)};

render(App);

if (module.hot) {
  module.hot.accept('./App', ()=> render(App));
}