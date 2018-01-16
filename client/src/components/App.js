import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// PAGES
import EventsNewPage from "./EventsNewPage";
import EventsIndexPage from "./EventsIndexPage";
import EventsShowPage from "./EventsShowPage";
import EventEditPage from './EventEditPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/events/new"> | Create Event </Link>
            <Link to="/events"> | Events </Link>
          </nav>

          <Switch>
            <Route path="/events/new" component={EventsNewPage} />
            <Route path="/events/:id" component={EventsShowPage} />
            <Route path="/events" component={EventsIndexPage} />
            <Route exact path="/events/:id/edit" component={EventEditPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
