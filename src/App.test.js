import ReactDOM from 'react-dom';
import App from './App';
import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/store";
import { Provider } from "react-redux";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
   <Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
