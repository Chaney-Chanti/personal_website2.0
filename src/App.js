import React from "react";
import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faYoutubeSquare,
  faInstagramSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./components/Header";
import "./styles/experience.css";
import "./styles/home.css";
import pdf from "./assets/resume.pdf";

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
                <Route exact path="/Projects" component={Projects} />
                <Route exact path="/Experience" component={Experience} />
                <Route exact path="/Contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Projects() {
  return <p>Personal Projects</p>;
}

function Experience() {
  return (
    <div className="xp-container">
      <h1 className="xp-header">Experience</h1>
      <div className="xp-first">
        <h2>Teradek</h2>
      </div>
    </div>
  );
}

function Contact() {
  return <p>Feel free to contact me!</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5 className="home-header">
          Hello! My name is <b className="name">Chaney Chantipaporn</b> and 
          welcome to my website!
        </h5>
        <button className="resume-button">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            Resume
          </a>
        </button>
      </div>
      <div className="icons-container">
        <a className="icon"
          href="https://www.youtube.com/channel/UCIgOGCfoVYmHTPQ4Rk6H63w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} size="4x" />
        </a>
        <a className="icon"
          href="https://www.instagram.com/chaney_chanti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="4x" />
        </a>
        <a className="icon"
          href="https://github.com/ChaneyChanti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="4x" />
        </a> 
        <a className="icon"
          href="https://www.linkedin.com/in/chaney-chantipaporn-19162b1b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
      </div>
    </div>
  );
}
export default App;
