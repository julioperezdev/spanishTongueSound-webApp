import React from 'react';

import Login from "./components/Login";
import Navbar from "./components/Nav"
import Index from "./components/Index";
import AdminDashboard from "./components/AdminDashboard";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {SystemBase} from "./css/style"

function App() {
  return (
    <SystemBase>
      <Router>
      <Navbar/>
      <Switch>
      <Route path="/" exact component = {Index}/> 
      <Route path = "/login" component = {Login}/>
      <Route path = "/admin" component = {AdminDashboard}/>
        
      </Switch>
      </Router>
    </SystemBase>
  );
}


export default App;
