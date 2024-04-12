import Nabar from "../components/Nabar";
import Arrow from "../components/Arrow";
import Buttons1 from "../components/Buttons1";
import Acme1Icon from "../components/Acme1Icon";
import Quantum1Icon from "../components/Quantum1Icon";
import Echo1Icon from "../components/Echo1Icon";
import Apex1Icon from "../components/Apex1Icon";
import VectorIcon from "../components/VectorIcon";
import Email from "../components/Email";
import Buttons from "../components/Buttons";
import "./Frame.css";
import { useState } from "react";

const Frame = () => {
  
 
  return (
    <div className="frame">
      <div className="frame-child" />
      <div className="stack">
        <div className="bar">
          <div className="this-page-is-included-in-a-fre-parent">
            <div className="this-page-is">
              This page is included in a free SaaS Website Kit.
            </div>
            <div className="view-the-complete-kit-parent">
              <div className="view-the-complete">View the complete Kit</div>
              <img className="icons" alt="" src="/icons.svg" />
            </div>
          </div>
        </div>
        <div className="nav-bar-desktop">
          <div className="logo">
            <div className="logodefault">
              <div className="logodefault-child" />
              <img className="logosaas-icon" alt="" src="/logosaas@2x.png" />
            </div>
            <div className="view-the-complete">made by</div>
            <img
              className="black-horizontal-1-icon"
              alt=""
              src="/blackhorizontal-1.svg"
            />
          </div>
          <Nabar />
        </div>
        <div className="hero">
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="group-item" />
            <div className="hero-content">
              <div className="tag">
                <div className="version-20-is-here-parent">
                  <div className="version-20-is">Version 2.0 is here</div>
                  <div className="read-more-parent">
                    <div className="read-more">Read more</div>
                    <Arrow />
                  </div>
                </div>
              </div>
              <b className="h1">
                <p className="one-task">One Task</p>
                <p className="one-task">at a Time</p>
              </b>
              <div className="body">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </div>
              <Buttons1 />
            </div>
            <img className="cursor-1-icon" alt="" src="/cursor-1@2x.png" />
            <img className="cursor-2-icon" alt="" src="/cursor-2@2x.png" />
            <img className="message-2-icon" alt="" src="/message-2@2x.png" />
            <img className="message-1-icon" alt="" src="/message-1@2x.png" />
          </div>
        </div>
        <div className="logo-ticker">
          <div className="trusted-by-the-worlds-most-in-parent">
            <div className="view-the-complete">
              Trusted by the world’s most innovative teams
            </div>
            <div className="acme-1-parent">
              <Acme1Icon />
              <Quantum1Icon />
              <Echo1Icon />
              
              <a href="https://en.wikipedia.org/wiki/Celestial_(comics)"><img
                className="celestia-1-icon"
                alt=""
                src="/celestia-1@2x.png"
              /></a>
              <img className="pulse-1-icon" alt="" src="/pulse-1@2x.png" />
              <Apex1Icon />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="h2-parent">
                <b className="h2">Everything you need</b>
                <div className="body1">
                  Enjoy customizable lists, team work tools, and smart tracking
                  all in one place. Set tasks, get reminders, and see your
                  progress simply and quickly.
                </div>
              </div>
            </div>
            <div className="feature-cards-parent">
              <div className="feature-cards">
                <div className="icons-wrapper">
                  <img className="icons1" alt="" src="/icons1.png" />
                </div>
                <div className="integration-ecosystem-parent">
                  <b className="integration-ecosystem">Integration ecosystem</b>
                  <div className="body2">
                    Enhance your productivity by connecting with your favorite
                    tools, keeping all your essentials in one place.
                  </div>
                </div>
              </div>
              <div className="feature-cards">
                <div className="icons-wrapper">
                  <img className="icons1" alt="" src="/icons1.png" />
                </div>
                <div className="integration-ecosystem-parent">
                  <b className="integration-ecosystem">
                    Goal setting and tracking
                  </b>
                  <div className="body2">
                    Define and track your goals, breaking down objectives into
                    achievable tasks to keep your targets in sight.
                  </div>
                </div>
              </div>
              <div className="feature-cards">
                <div className="icons-wrapper">
                  <img className="icons1" alt="" src="/icons1.png" />
                </div>
                <div className="integration-ecosystem-parent">
                  <b className="integration-ecosystem">
                    Secure data encryption
                  </b>
                  <div className="body2">
                    With end-to-end encryption, your data is securely stored and
                    protected from unauthorized access.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="h2-parent">
                <b className="h2">Intuitive interface</b>
                <div className="body1">
                  Celebrate the joy of accomplishment with an app designed to
                  track your progress, motivate your efforts, and celebrate your
                  successes, one task at a time.
                </div>
              </div>
            </div>
            <img className="app-night-icon" alt="" src="/app-night@2x.png" />
          </div>
        </div>
        <div className="faq">
          <b className="h22">Frequently asked questions</b>
          <div className="faqs">
            <div className="formfaq">
              <b className="how-does-the">
                How does the pricing work for teams
              </b>
              <div className="frame1">
                <VectorIcon />
              </div>
            </div>
            <div className="formfaq">
              <b className="how-does-the">
                How does the pricing work for teams
              </b>
              {/* <div className="frame1">
                <img className="vector-icon" alt="" src="/Ps.png" />
              </div> */}
            <VectorIcon/>
            </div>
            <div className="formfaq">
              <b className="how-does-the">
                How does the pricing work for teams
              </b>
              <VectorIcon/>
            </div>
            <div className="formfaq">
              <b className="how-does-the">
                How does the pricing work for teams
              </b>
              
           <VectorIcon/>
              
            </div>
          </div>
        </div>
        <div className="sign-up">
          <div className="sign-up-inner">
            <div className="frame-div">
              <div className="h2-parent">
                <b className="h23">Get instant access</b>
                <div className="body6">
                  Celebrate the joy of accomplishment with an app designed to
                  track your progress and motivate your efforts.
                </div>
              </div>
              <div className="form">
                <Email />
                <Buttons />
              </div>
            </div>
          </div>
          <img className="emojistar-1-icon" alt="" src="/emojistar-1@2x.png" />
          <img className="helix2-1-icon" alt="" src="/helix2-1@2x.png" />
        </div>
        <div className="footer-s">
          <div className="view-the-complete">
           <p>@ 2024 Your Company, Inc. All rights reserved</p>
          </div>
          <div className="socials-parent">
            <a href="https://twitter.com/">
            <img className="socials-icon" alt="" src="/twiter.png" /></a>
            <a href="https://www.instagram.com/">
            <img className="socials-icon" alt="" src="/Fb.png" /></a>
            <a href="https://in.pinterest.com/">
            <img className="socials-icon" alt="" src="/So.png" /></a>
            <a href="https://in.linkedin.com/">
            <img className="socials-icon" alt="" src="/vector.svg" /></a>
            <a href="https://www.tiktok.com/en/">
            <img className="socials-icon" alt="" src="/Tw.png" /></a>
            <a href="https://www.youtube.com/">
            <img className="socials-icon" alt="" src="/socials.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
