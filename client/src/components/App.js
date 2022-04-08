// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Events from './Events';
import Contacts from './Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/events">
            <h1>Events</h1>
            <Events />
          </Route>
          <Route path="/contacts">
            <h1>Contacts</h1>
            <Contacts />
          </Route>
          <Route path="/">
            <h1>ENDURE</h1>
            <h3>Your Personal CRM</h3>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;