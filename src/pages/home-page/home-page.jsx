import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

import "./home-page.css";

import { useEffect } from "react";
import avatar from "../../assets/avatar.jpg";
import github from "../../assets/icons/github.png";
import gmail from "../../assets/icons/gmail.png";
import instagram from "../../assets/icons/instagram.png";

import linkedin from "../../assets/icons/linkedin.png";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main>
      <div className="home__wrapper">
        <div className="home__main-infos">
          <div
            className="main__infos"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>Hi There!</h2>
            <h1>
              I'm <span>Prajjwal Chand</span>
            </h1>
            <p>
              
              I am a proactive final year student <br /> 
              at IIT Jodhpur,
              <br />
              skilled in programming, machine learning, and web development, 
              <br />
              with a passion for innovation and leadership.
            </p>
          </div>
          <div
            className="home__avatar"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img className="avatar" src={avatar} alt="avatar_image" />
          </div>
        </div>

        <div
          className="contacts__block"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="contacts_main">
            <h1>Get in Touch</h1>
          </div>
          <div className="contacts_description">
            <p>
              Whether you want to get in touch, or talk about a project
              collaboration. <br /> <span>Feel free to connect with me</span>
            </p>
          </div>
          <div className="contacts">
            <a
              className="contact_item"
              href="https://github.com/PrajjwalChand"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            {/* <a
              className="contact_item"
              href="https://t.me/oblivion_47"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a> */}
            <a
              className="contact_item"
              href="https://www.instagram.com/prajjwalchand_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              className="contact_item"
              href="chandakash01@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
            <a
              className="contact_item"
              href="https://www.linkedin.com/in/prajjwalchand/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="gmail" />
            </a>

          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
