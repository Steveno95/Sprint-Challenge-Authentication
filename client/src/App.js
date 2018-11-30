import React, { Component } from 'react';
import Register from './components/SignUp.js';
import Login from './components/SignIn.js';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          
        </section>
      </div>
    );
  }
}

export default App;
