import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router/router";
//import {Provider} from "react-redux";
import { api, buildProvider } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Provider = buildProvider();

root.render(
  //<Provider store={api}>
  <Provider>
    <React.StrictMode>
      <Router></Router>
    </React.StrictMode>
  </Provider>
  //</Provider>
);