// client/src/components/App.js
// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Events from './Events';
import Contacts from './Contacts';
import Event from './Event';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/event">
            <h1>Events</h1>
            <Events />
          </Route>
          <Route path="/event/:id">
            <h1>Single Event</h1>
            <Event />
          </Route>
          <Route exact path="/contact">
            <h1>Contacts</h1>
            <Contacts />
          </Route>
          <Route path="/contact/:id">
            <h1>Single Contact</h1>
            <Contact />
          </Route>
          <Route exact path="/">
            {/* <h1>ENDURE</h1> */}
            <h1>Your Personal CRM</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;