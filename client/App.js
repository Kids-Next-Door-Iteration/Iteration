import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Messages from './components/Messages';
import DirMessage from './components/DirectMessage';
import Thread from './components/Thread';
import NavBar from './components/NavBar';
import Signup from './components/SignUp';
import Home from './components/Home';

function App() {
  const loggedIn = sessionStorage.getItem('loggedIn');

  if (!loggedIn) {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/messages'>
          <Messages />
        </Route>
        <Route path='/messages/:id'>
          <DirMessage />
        </Route>
        <Route path='/thread/:id'>
          <Thread />
        </Route>
      </div>
    );
  }
}

export default App;
