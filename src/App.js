import React, { useEffect } from "react";
import "./App.scss";
import {
  faYoutubeSquare,
  faInstagramSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from 'aos';

import Header from "./components/Header";
import "./styles/home.css";
import "./styles/contact.css"
import pdf from "./assets/resume.pdf";
import ExperienceCard from "./components/ExperienceCard";
import amazon_logo from "./assets/amazon_logo.jpg";
import teradek_logo from "./assets/teradek_logo.jpg";
import emailjs from 'emailjs-com';




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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="experiencecard-container">
      <h1 className="xp-header">Experience</h1>
      <div data-aos="zoom-in-left">
          <ExperienceCard className="experiencecard"
              imgLink={amazon_logo}
              title="Amazon"
              role="Incoming SDE Intern"
              date="Summer 2022">
              <p className="body-text">
                More to come!
              </p>
          </ExperienceCard>
      </div>
      <div data-aos="zoom-in-right">
          <ExperienceCard className="experiencecard"
              imgLink={teradek_logo}
              title="Teradek"
              role="Firmware Engineer Intern"
              date="July 2021 - Current">
              <p className="body-text">
                  What began as a short four week internship and now a part-time job, I began the internship
                  developing automation scripts in python to perform quality assurance tests on Teradek devices 
                  to reduce manual testing labor. Using FFMPEG and VMAF for video analysis, the MQTT protocol for 
                  messaging, and a statistical dashboard to display device testing errors, I learned a great deal 
                  about encoders, decoders, the asynchronous pub/sub communication, and HTML/CSS/Javascript.
              </p>
          </ExperienceCard>
      </div>
    </div>
  );
}

function Contact() {

  function sendEmail (e) {
    e.preventDefault();
    
    emailjs.sendForm('personal_website', 'template_tir7z7i', e.target, 'user_oyQRSgwxVM5RvPZauCMhm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="contact-container">
      <h1 className="contact-header">Feel Free To Contact Me!</h1>
      <form className="form-handler" onSubmit={sendEmail}>
          <label className="label-text">Name</label>
          <input className="inputfield-sm" type="text" name="from_name" placeholder="Name"/>
          <label className="label-text">Email</label>
          <input className="inputfield-sm" type="text" name="from_email" placeholder = "Email"/>
          <label className="label-text">Message</label>
          <textarea className="inputfield-lg" name="message" placeholder="Message..." />
          <input className="send-btn" type="submit" value="Send" />
      </form>
    </div>
  )
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
