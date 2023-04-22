import React from 'react';
import ReactDOM from 'react-dom/client';
import PSI from "./ui/page/PSI";
import PSU from "./ui/page/PSU";
import PU1 from "./ui/page/PU1";
import PU2 from "./ui/page/PU2";
import PU3 from "./ui/page/PU3";
import PU4 from "./ui/page/PU4";
import PA1 from "./ui/page/PA1";
import PA2 from "./ui/page/PA2";
import PA3 from "./ui/page/PA3";
import PA4 from "./ui/page/PA4";
import PA5 from "./ui/page/PA5";
import Router from "./router/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>
);