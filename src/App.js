import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Personal Projects</p>;
}

function Solutions() {
  return <p>Experience</p>;
}

function Contact() {
  return <p>Feel free to contact me!</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          Hello! My name is <b>Chaney Chantipaporn</b> and welcome to my website!
        </h5>
      </div>
    </div>
  );
}
export default App;
