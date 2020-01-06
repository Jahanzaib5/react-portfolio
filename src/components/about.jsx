import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am an undergraduate student at University of Central
                        Asia, majoring in Computer Science. I am quite
                        interested in building websites and want to pursue my career as a
                        full-stack developer in the future (atleast, I hope so! ;){" "}
                      </p>
                      <p>It's been quite a time now that I have been building websites and trying to explore 
                          the area of web-development, and I find it quite interesting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web-Development </h3>
                    <p>
                      I have being building websites and application using HTML,
                      CSS, Bootstrap, Javascript, PHP, reactjs and so on.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-wordpress" />
                  </span>
                  <div className="desc">
                    <h3>Wordpress</h3>
                    <p>
                      I can create responsive websites equipped with 
                      e-commerce applicaiton in Wordpress, quite efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Other skills</h3>
                    <p>
                      I have a command over some of the languages such as; 
                      Pyhon, c-programming, postgreSQL, Postman, graphql .etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
