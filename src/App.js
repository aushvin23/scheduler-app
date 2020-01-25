import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import {Admin} from './Components/Admin'
import {User} from './Components/User'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { 

    };
  }

  render() {
    return (
    <BrowserRouter>
      <div className="app">
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
        <Route exact path="/admin" component={Admin} />
        <Route path="/user" component={User} />
      </div>
    </BrowserRouter>
    )
  }

}

export default App;


