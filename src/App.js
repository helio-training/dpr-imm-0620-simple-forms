import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './config/Menu';
import Routes from './config/Routes';
import './App.css';

export default class App extends React.Component {
  state = {
    users: []
  }
  addUser = (user) => {
    this.setState(
      {
        users: this.state.users.concat([user])
      },
      () => console.log(this.state)
    );
  } 
  render(){
    return (
      <Router>
        <div>
          <Menu/>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes addUser={user => this.addUser(user)}/>
        </div>
      </Router>
    );
  }
}
