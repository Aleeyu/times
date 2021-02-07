import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import routers from "./router/index";
import 'antd-mobile/dist/antd-mobile.css';
import Index from './pages/index';
import Info from './pages/info/info';
import Child from './pages/child/child';
import ChildInfo from './pages/childInfo/childInfo';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/child" component={Child} />
      <Route path="/childinfo" component={ChildInfo} />
      <Route path="/info" component={Info} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
