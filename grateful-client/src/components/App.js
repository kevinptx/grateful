import React from "react";
import Entries from "../containers/Entries";
import Entry from "../containers/Entry";
import EntryForm from "../containers/EntryForm";
import NoMatch from "./NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar, { Home, About } from "./Navbar";
import "../css/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 className="title">Grateful Journal</h1>
        <Navbar className="navbar" />
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/about" render={About} />
          <Route exact path="/entries/new" component={EntryForm} />
          <Route exact path="/entries" component={Entries} />
          <Route path="/entries/:id/edit" component={EntryForm} />
          <Route path="/entries/:id" component={Entry} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
