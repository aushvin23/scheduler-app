import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Admin  from './Components/Admin';
import User from './Components/User';
import Schedule from './Components/Schedule'

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
          <li><Link to="/schedule">Schedule</Link></li>
        </ul>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/user" component={User} />
        <Route exact path="/schedule" component={Schedule} />
      </div>
    </BrowserRouter>
    )
  }

}

export default App;


