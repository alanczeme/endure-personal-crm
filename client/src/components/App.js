// client/src/components/App.js
// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Events from './Events';
import Contacts from './Contacts';
import Event from './Event';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/event">
            <NavBar />
            <h1>Events</h1>
            <Events />
          </Route>
          <Route path="/event/:id">
            <NavBar />
            <Event />
          </Route>
          <Route exact path="/contact">
            <NavBar />
            <h1>Contacts</h1>
            <Contacts />
          </Route>
          <Route path="/contact/:id">
            <NavBar />
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;