import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import Home from './components/home';
import Create from './components/create';
import Vote from './components/vote';
import Selected from './components/selected';
import Login from './components/login';
import User from './components/user';
import Memes from './components/memes';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route exact path="/create" component={Create}/>
        <Route path="/vote" component={Vote}/>
        <Route path="/user" component={User}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Login}/>
        <Route exact path="/create/selected" component={Selected}/>
        <Route path="/create/memes" component={Memes}/>
        <Redirect to="/home"/>
      </Switch>
      </div>
    );
  }
}

export default App;
