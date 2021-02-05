import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import routers from "./router/index";
import 'antd-mobile/dist/antd-mobile.css';
import Index from './pages/index';
import Info from './pages/info/info';
import Child from './pages/child/child';
import ChildInfo from './pages/childInfo/childInfo';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/child" component={Child} />
      <Route path="/childinfo" component={ChildInfo} />
      <Route path="/info" component={Info} />
    </Router>
  );
}

export default App;
