import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './DemoPages/Main';
import Login from './Login';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './test.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route path={'/'} exact component={CaseListWithAgGrid} /> */}
        <Route path={'/Login'} exact component={Login} />
        <Route path={'/'} exact component={Login} />
        <Main />
      </Switch>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
