import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./about-page.css";

import aboutImg from "../../assets/about-img.jpg";

import css from "../../assets/skills/css.png";
import c from "../../assets/skills/c++.png";
import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import mui from "../../assets/skills/sql.png";
import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import firebase from "../../assets/skills/firebase.png";
import python from "../../assets/skills/python.png";
import mongodb from "../../assets/skills/mongodb.png";

import { useEffect } from "react";
import chrome from "../../assets/skills/chrome.png";
// import figma from "../../assets/skills/figma.png";
import github from "../../assets/skills/github.png";
import npm from "../../assets/skills/npm.png";
import photoshop from "../../assets/skills/photoshop.png";
import vscode from "../../assets/skills/vscode.png";
import jupyter from "../../assets/skills/jupyter.png";

  

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about_wrapper">
      <div className="main_about">
        <div className="left_block">
          <div
            className="about_title"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1>About Me</h1>
            <div className="about_me-description">
              <p>
                Hi, I'm Prajjwal,
                I'm currently looking for a job as Software Engineer,I'm skilled in Python, C/C++, React, JavaScript, Firebase, Flask, MongoDB, SQL
                and machine learning. With a strong problem-solving background 
                and leadership experience.
                I speak English and hindi(fluent)
              </p>
            </div>
          </div>
        </div>

        <div
          className="right_block"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={aboutImg} alt="about_img" />
        </div>
      </div>

      <div className="skils_tools">
        <div className="skills_bar" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            Professional <span>Skillset</span>
          </h1>
          <div className="skills">
            <div className="skill">
              <img src={c} alt="c" />
              <p>C/C++</p>
            </div>
            <div className="skill">
              <img src={html} alt="html" />
              <p>HTML5</p>
            </div>

            <div className="skill">
              <img src={css} alt="css" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={firebase} alt="firebase" />
              <p>Firebase</p>
            </div>
            <div className="skill">
              <img src={mongodb} alt="mongodb" />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <img src={js} alt="js" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={react} alt="react" />
              <p>React.js</p>
            </div>
            <div className="skill">
              <img src={redux} alt="redux" />
              <p>Redux</p>
            </div>
            <div className="skill">
              <img src={mui} alt="SQL" />
              <p>SQL</p>
            </div>
            <div className="skill">
              <img src={python} alt="git" />
              <p>Python</p>
            </div>
            {/* <div className="skill">
              <img src={git} alt="git" />
              <p>Git</p>
            </div> */}
          </div>
        </div>

        <div className="tools_bar" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            <span>Tools</span> I use
          </h1>
          <div className="tools">
            <div className="tool">
              <img src={vscode} alt="vscode" />
              <p>VSCode</p>
            </div>
            <div className="tool">
              <img src={chrome} alt="chrome" />
              <p>Chrome</p>
            </div>
            <div className="tool">
              <img src={github} alt="github" />
              <p>GitHub</p>
            </div>
            <div className="tool">
              <img src={npm} alt="npm" />
              <p>NPM</p>
            </div>
            <div className="tool">
              <img src={photoshop} alt="photoshop" />
              <p>Photoshop</p>
            </div>
            <div className="tool">
              <img src={jupyter} alt="Jupyter" />
              <p>Jupyter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
