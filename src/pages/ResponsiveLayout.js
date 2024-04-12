import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./ResponsiveLayout.css";

const ResponsiveLayout = () => {
  const onIconsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='resizeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="responsive-layout">
      <div className="resize" data-scroll-to="resizeContainer">
        <div className="vertical">
          <div className="horizontal">
            <div className="mobile">
              <div className="resize">
                <div className="mobile-child" />
                <div className="stack1">
                  <div className="bar1">
                    <div className="this-page-is-included-in-a-fre-group">
                      <div className="this-page-is1">
                        This page is included in a free SaaS Website Kit.
                      </div>
                      <div className="view-the-complete-kit-group">
                        <div className="view-the-complete1">
                          View the complete Kit
                        </div>
                        <img className="icons4" alt="" src="/icons.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="logo1">
                    <div className="logodefault1">
                      <div className="logodefault-item" />
                      <img
                        className="logosaas-icon1"
                        alt=""
                        src="/logosaas@2x.png"
                      />
                    </div>
                    <img className="icons5" alt="" src="/icons.svg" />
                  </div>
                  <div className="hero1">
                    <div className="rectangle-group">
                      <div className="group-inner" />
                      <div className="ellipse-div" />
                      <div className="hero-content1">
                        <div className="tag1">
                          <div className="version-20-is-here-group">
                            <div className="version-20-is1">
                              Version 2.0 is here
                            </div>
                            <div className="read-more-group">
                              <div className="read-more1">Read more</div>
                              <img
                                className="icons4"
                                alt=""
                                src="/icons1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h11">
                          <p className="frequently">One Task</p>
                          <p className="frequently">at a Time</p>
                        </div>
                        <div className="body7">
                          Celebrate the joy of accomplishment with an app
                          designed to track your progress, motivate your
                          efforts, and celebrate your successes.
                        </div>
                        <div className="buttons">
                          <div className="get-for-free">Get for free</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="logos">
                    <div className="trusted-by-the-worlds-most-in-group">
                      <div className="trusted-by-the1">
                        Trusted by the world’s most innovative teams
                      </div>
                      <div className="frame-parent1">
                        <div className="acme-1-group">
                          <img
                            className="acme-1-icon"
                            alt=""
                            src="/acme-1@2x.png"
                          />
                          <img
                            className="quantum-1-icon"
                            alt=""
                            src="/quantum-1@2x.png"
                          />
                        </div>
                        <div className="echo-1-parent">
                          <img
                            className="echo-1-icon"
                            alt=""
                            src="/echo-1@2x.png"
                          />
                          <img
                            className="celestia-1-icon1"
                            alt=""
                            src="/celestia-1@2x.png"
                          />
                        </div>
                        <div className="echo-1-parent">
                          <img
                            className="pulse-1-icon1"
                            alt=""
                            src="/pulse-1@2x.png"
                          />
                          <img
                            className="apex-1-icon"
                            alt=""
                            src="/apex-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nd">
                    <div className="frame-parent2">
                      <div className="frame-wrapper1">
                        <div className="h2-parent1">
                          <div className="h24">Everything you need</div>
                          <div className="body8">
                            Enjoy customizable lists, team work tools, and smart
                            tracking all in one place. Set tasks, get reminders,
                            and see your progress simply and quickly.
                          </div>
                        </div>
                      </div>
                      <div className="feature-cards-group">
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Integration ecosystem
                            </b>
                            <div className="body9">
                              Enhance your productivity by connecting with your
                              favorite tools, keeping all your essentials in one
                              place.
                            </div>
                          </div>
                        </div>
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Goal setting and tracking
                            </b>
                            <div className="body9">
                              Define and track your goals, breaking down
                              objectives into achievable tasks to keep your
                              targets in sight.
                            </div>
                          </div>
                        </div>
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Secure data encryption
                            </b>
                            <div className="body9">
                              With end-to-end encryption, your data is securely
                              stored and protected from unauthorized access.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rd">
                    <div className="frame-parent3">
                      <div className="frame-wrapper2">
                        <div className="h2-parent1">
                          <div className="h25">Intuitive interface</div>
                          <div className="body12">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your successes, one task at a
                            time.
                          </div>
                        </div>
                      </div>
                      <img
                        className="app-night-icon1"
                        alt=""
                        src="/app-night@2x.png"
                      />
                    </div>
                  </div>
                  <div className="faq1">
                    <div className="h26">
                      <p className="frequently">{`Frequently `}</p>
                      <p className="frequently">asked questions</p>
                    </div>
                    <div className="faqs1">
                      <div className="formfaq4">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq4">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq4">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq4">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instant-access">
                    <div className="instant-access-inner">
                      <div className="frame-parent4">
                        <div className="h2-parent3">
                          <div className="h27">Get instant access</div>
                          <div className="body13">
                            <p className="frequently">
                              Celebrate the joy of accomplishment with
                            </p>
                            <p className="frequently">
                              {" "}
                              an app designed to track your progress
                            </p>
                            <p className="frequently">
                              {" "}
                              and motivate your efforts.
                            </p>
                          </div>
                        </div>
                        <div className="form1">
                          <div className="form2">
                            <div className="get-for-free">name@email.com</div>
                          </div>
                          <div className="buttons1">
                            <div className="get-for-free">Get access</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img className="helix-icon" alt="" src="/helix@2x.png" />
                  </div>
                  <div className="footer-s1">
                    <div className="view-the-complete1">
                      @ 2024 Your Company, Inc. All rights reserved
                    </div>
                    <div className="socials-group">
                      <img className="socials" alt="" src="/socials.svg" />
                      <img className="socials" alt="" src="/socials1.svg" />
                      <img className="socials" alt="" src="/socials2.svg" />
                      <img className="socials" alt="" src="/socials3.svg" />
                      <img className="socials" alt="" src="/socials4.svg" />
                      <img className="socials" alt="" src="/socials5.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal1">
            <div className="tablet">
              <div className="tablet1">
                <div className="purple-gradient" />
                <div className="stack2">
                  <div className="bar2">
                    <div className="this-page-is-included-in-a-fre-container">
                      <div className="this-page-is2">
                        This page is included in a free SaaS Website Kit.
                      </div>
                      <div className="view-the-complete-kit-group">
                        <div className="view-the-complete1">
                          View the complete Kit
                        </div>
                        <img className="icons4" alt="" src="/icons.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="nav-bar-desktop1">
                    <div className="logo2">
                      <div className="logodefault1">
                        <div className="logodefault-item" />
                        <img
                          className="logosaas-icon1"
                          alt=""
                          src="/logosaas@2x.png"
                        />
                      </div>
                      <div className="view-the-complete1">made by</div>
                      <img
                        className="black-horizontal-1-icon1"
                        alt=""
                        src="/blackhorizontal-1.svg"
                      />
                    </div>
                    <div className="stack3">
                      <div className="about">About</div>
                      <div className="about">Features</div>
                      <div className="about">Customers</div>
                      <div className="about">Updates</div>
                      <div className="about">Help</div>
                      <div className="buttons2">
                        <div className="get-for-free">Get for free</div>
                      </div>
                    </div>
                  </div>
                  <div className="hero2">
                    <div className="rectangle-container">
                      <div className="rectangle-div" />
                      <div className="group-child1" />
                      <div className="hero-content2">
                        <div className="tag1">
                          <div className="version-20-is-here-group">
                            <div className="version-20-is1">
                              Version 2.0 is here
                            </div>
                            <div className="read-more-group">
                              <div className="read-more1">Read more</div>
                              <img
                                className="icons4"
                                alt=""
                                src="/icons1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h12">
                          <p className="frequently">One Task</p>
                          <p className="frequently">at a Time</p>
                        </div>
                        <div className="body14">
                          Celebrate the joy of accomplishment with an app
                          designed to track your progress, motivate your
                          efforts, and celebrate your successes.
                        </div>
                        <div className="buttons">
                          <div className="get-for-free">Get for free</div>
                        </div>
                      </div>
                    </div>
                    <div className="message">
                      <img
                        className="message-2-icon1"
                        alt=""
                        src="/message-2@2x.png"
                      />
                      <img
                        className="message-1-icon1"
                        alt=""
                        src="/message-1@2x.png"
                      />
                    </div>
                    <div className="cursor">
                      <img
                        className="cursor-1-icon1"
                        alt=""
                        src="/cursor-1@2x.png"
                      />
                      <img
                        className="cursor-2-icon1"
                        alt=""
                        src="/cursor-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="logos1">
                    <div className="trusted-by-the-worlds-most-in-container">
                      <div className="view-the-complete1">
                        Trusted by the world’s most innovative teams
                      </div>
                      <div className="frame-parent5">
                        <div className="echo-1-parent">
                          <img
                            className="acme-1-icon"
                            alt=""
                            src="/acme-1@2x.png"
                          />
                          <img
                            className="quantum-1-icon"
                            alt=""
                            src="/quantum-1@2x.png"
                          />
                          <img
                            className="echo-1-icon"
                            alt=""
                            src="/echo-1@2x.png"
                          />
                        </div>
                        <div className="echo-1-parent">
                          <img
                            className="celestia-1-icon1"
                            alt=""
                            src="/celestia-1@2x.png"
                          />
                          <img
                            className="pulse-1-icon1"
                            alt=""
                            src="/pulse-1@2x.png"
                          />
                          <img
                            className="apex-1-icon"
                            alt=""
                            src="/apex-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nd1">
                    <div className="frame-parent6">
                      <div className="frame-wrapper1">
                        <div className="h2-parent1">
                          <b className="h28">Everything you need</b>
                          <div className="body15">
                            Enjoy customizable lists, team work tools, and smart
                            tracking all in one place. Set tasks, get reminders,
                            and see your progress simply and quickly.
                          </div>
                        </div>
                      </div>
                      <div className="feature-cards-container">
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Integration ecosystem
                            </b>
                            <div className="body9">
                              Enhance your productivity by connecting with your
                              favorite tools, keeping all your essentials in one
                              place.
                            </div>
                          </div>
                        </div>
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Goal setting and tracking
                            </b>
                            <div className="body9">
                              Define and track your goals, breaking down
                              objectives into achievable tasks to keep your
                              targets in sight.
                            </div>
                          </div>
                        </div>
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Secure data encryption
                            </b>
                            <div className="body9">
                              With end-to-end encryption, your data is securely
                              stored and protected from unauthorized access.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rd1">
                    <div className="frame-parent7">
                      <div className="frame-wrapper1">
                        <div className="h2-parent1">
                          <b className="h28">Intuitive interface</b>
                          <div className="body15">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your successes, one task at a
                            time.
                          </div>
                        </div>
                      </div>
                      <img
                        className="app-night-icon2"
                        alt=""
                        src="/app-night@2x.png"
                      />
                    </div>
                  </div>
                  <div className="faq2">
                    <b className="h210">Frequently asked questions</b>
                    <div className="faqs2">
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instant-access1">
                    <div className="instant-access-child">
                      <div className="frame-parent8">
                        <div className="h2-parent1">
                          <b className="h211">Get instant access</b>
                          <div className="body20">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress and motivate your
                            efforts.
                          </div>
                        </div>
                        <div className="form3">
                          <div className="form2">
                            <div className="get-for-free">name@email.com</div>
                          </div>
                          <div className="buttons2">
                            <div className="get-for-free">Get access</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img className="graph-icon" alt="" src="/graph@2x.png" />
                    <img className="helix-icon" alt="" src="/helix@2x.png" />
                  </div>
                  <div className="footer-s2">
                    <div className="view-the-complete1">
                      @ 2024 Your Company, Inc. All rights reserved
                    </div>
                    <div className="socials-group">
                      <img className="socials" alt="" src="/socials.svg" />
                      <img className="socials" alt="" src="/socials1.svg" />
                      <img className="socials" alt="" src="/socials2.svg" />
                      <img className="socials" alt="" src="/socials3.svg" />
                      <img className="socials" alt="" src="/socials4.svg" />
                      <img className="socials" alt="" src="/socials5.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal2">
            <div className="frame13">
              <div className="frame14">
                <div className="frame-item" />
                <div className="stack4">
                  <div className="bar3">
                    <div className="this-page-is-included-in-a-fre-container">
                      <div className="this-page-is2">
                        This page is included in a free SaaS Website Kit.
                      </div>
                      <div className="view-the-complete-kit-group">
                        <div className="view-the-complete1">
                          View the complete Kit
                        </div>
                        <img
                          className="icons15"
                          alt=""
                          src="/icons.svg"
                          onClick={onIconsClick}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="nav-bar-desktop2" data-animate-on-scroll>
                    <div className="logo2">
                      <div className="logodefault1">
                        <div className="logodefault-item" />
                        <img
                          className="logosaas-icon1"
                          alt=""
                          src="/logosaas@2x.png"
                        />
                      </div>
                      <div className="view-the-complete1">made by</div>
                      <img
                        className="black-horizontal-1-icon1"
                        alt=""
                        src="/blackhorizontal-1.svg"
                      />
                    </div>
                    <div className="stack5">
                      <a className="about1">About</a>
                      <div className="about">Features</div>
                      <div className="about">Customers</div>
                      <div className="about">Updates</div>
                      <div className="help1">Help</div>
                      <Button variant="outline-primary">Get for free</Button>
                    </div>
                  </div>
                  <div className="hero3">
                    <div className="group-div">
                      <div className="group-child2" />
                      <div className="group-child3" />
                      <div className="hero-content3">
                        <div className="tag3">
                          <div className="version-20-is-here-group">
                            <div className="version-20-is1">
                              Version 2.0 is here
                            </div>
                            <div className="read-more-group">
                              <div className="read-more1">Read more</div>
                              <img
                                className="icons4"
                                alt=""
                                src="/icons1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <b className="h13">
                          <p className="frequently">One Task</p>
                          <p className="frequently">at a Time</p>
                        </b>
                        <div className="body21">
                          Celebrate the joy of accomplishment with an app
                          designed to track your progress, motivate your
                          efforts, and celebrate your successes.
                        </div>
                        <div className="buttons5">
                          <Button
                            className="view-the-complete1"
                            variant="outline-primary"
                          >
                            Get for free
                          </Button>
                        </div>
                      </div>
                      <img
                        className="cursor-1-icon2"
                        alt=""
                        src="/cursor-1@2x.png"
                      />
                      <img
                        className="cursor-2-icon2"
                        alt=""
                        src="/cursor-2@2x.png"
                      />
                      <img
                        className="message-2-icon2"
                        alt=""
                        src="/message-2@2x.png"
                      />
                      <img
                        className="message-1-icon2"
                        alt=""
                        src="/message-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="logo-ticker1">
                    <div className="trusted-by-the-worlds-most-in-parent1">
                      <div className="view-the-complete1">
                        Trusted by the world’s most innovative teams
                      </div>
                      <div className="acme-1-parent1">
                        <a
                          className="acme-1"
                          href="https://www.acme.in/"
                          target="_blank"
                        />
                        <img
                          className="quantum-1-icon"
                          alt=""
                          src="/quantum-1@2x.png"
                        />
                        <img
                          className="echo-1-icon"
                          alt=""
                          src="/echo-1@2x.png"
                        />
                        <img
                          className="celestia-1-icon1"
                          alt=""
                          src="/celestia-1@2x.png"
                        />
                        <img
                          className="pulse-1-icon1"
                          alt=""
                          src="/pulse-1@2x.png"
                        />
                        <img
                          className="apex-1-icon"
                          alt=""
                          src="/apex-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid1">
                    <div className="frame-parent9">
                      <div className="frame-wrapper1">
                        <div className="h2-parent1">
                          <b className="h28">Everything you need</b>
                          <div className="body15">
                            Enjoy customizable lists, team work tools, and smart
                            tracking all in one place. Set tasks, get reminders,
                            and see your progress simply and quickly.
                          </div>
                        </div>
                      </div>
                      <div className="feature-cards-parent1">
                        <Form.Select
                          className="feature-cards-formselect"
                          value="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
                        >
                          <option>Integration ecosystem</option>
                          <option value="Integration ecosystem">
                            Integration ecosystem
                          </option>
                          <option value="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.">
                            Enhance your productivity by connecting with your
                            favorite tools, keeping all your essentials in one
                            place.
                          </option>
                        </Form.Select>
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Goal setting and tracking
                            </b>
                            <div className="body9">
                              Define and track your goals, breaking down
                              objectives into achievable tasks to keep your
                              targets in sight.
                            </div>
                          </div>
                        </div>
                        <div className="feature-cards3">
                          <div className="icons-wrapper1">
                            <img className="icons5" alt="" src="/icons2.svg" />
                          </div>
                          <div className="integration-ecosystem-parent1">
                            <b className="integration-ecosystem3">
                              Secure data encryption
                            </b>
                            <div className="body9">
                              With end-to-end encryption, your data is securely
                              stored and protected from unauthorized access.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product1">
                    <div className="frame-parent10">
                      <div className="frame-wrapper1">
                        <div className="h2-parent1">
                          <b className="h28">Intuitive interface</b>
                          <div className="body15">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your successes, one task at a
                            time.
                          </div>
                        </div>
                      </div>
                      <Button className="app-night" variant="outline-primary" />
                    </div>
                  </div>
                  <div className="faq3">
                    <b className="h214">Frequently asked questions</b>
                    <div className="faqs3">
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="formfaq8">
                        <b className="how-does-the4">
                          How does the pricing work for teams
                        </b>
                        <div className="frame5">
                          <img
                            className="vector-icon3"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sign-up1">
                    <div className="sign-up-child">
                      <div className="frame-parent11">
                        <div className="h2-parent1">
                          <b className="h211">Get instant access</b>
                          <div className="body20">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress and motivate your
                            efforts.
                          </div>
                        </div>
                        <div className="form5">
                          <Form className="form6">
                            <Form.Label>name@email.com</Form.Label>
                            <Form.Control type="text" />
                          </Form>
                          <Button variant="outline-primary">Get access</Button>
                        </div>
                      </div>
                    </div>
                    <img
                      className="emojistar-1-icon1"
                      alt=""
                      src="/emojistar-1@2x.png"
                    />
                    <img
                      className="helix2-1-icon1"
                      alt=""
                      src="/helix2-1@2x.png"
                    />
                  </div>
                  <div className="footer-s3">
                    <div className="view-the-complete1">
                      @ 2024 Your Company, Inc. All rights reserved
                    </div>
                    <div className="socials-group">
                      <img className="socials" alt="" src="/socials.svg" />
                      <img className="socials" alt="" src="/socials1.svg" />
                      <img className="socials" alt="" src="/socials2.svg" />
                      <div className="socials">
                        <img
                          className="vector-icon15"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <img className="socials" alt="" src="/socials4.svg" />
                      <a className="socials1" href="https://www.youtube.com/">
                        <img
                          className="vector-icon16"
                          alt=""
                          src="/vector@2x.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ruler">
        <div className="rectangle" />
        <div className="ellipse" />
        <img className="frame-icon" alt="" src="/frame.svg" />
        <img className="frame-icon1" alt="" src="/frame.svg" />
        <img className="frame-icon2" alt="" src="/frame.svg" />
        <img className="frame-icon3" alt="" src="/frame.svg" />
        <div className="div">320</div>
        <b className="b">478</b>
        <b className="b1">991</b>
        <div className="div1">1440</div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
