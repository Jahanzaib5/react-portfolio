import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>Internship at uExel, Islamabad, Pakistan <span>may-2019-july-2019</span></h2>
                        <p>uExel is one of the leading websites and application development company based in Pakistan.
                           The services provided by uExel includes website designing, formation 
                          of digital identity, print and media campaigns, marketing and so on. 
                          Over the course of my internship term, I practised HTML, CSS, JavaScript, Bootstrap, Reactjs, MySQL, postman,
                           GraphQL, and so on. I complete centain tasks and assignments using the programming languages mentioned before.
                          </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                          <h2>Undergradute student at UCA, Naryn Campus <span>2016-2021(expectd)</span></h2>
                        <p>I am a junior year student at University of Central Asia, majoring in Computer Science.
                          We have been following the syllabus and courses designed by the University of Toroto for us,
                          which complies with the modern world requirements. The courses are desinged in way that we are not
                          just learning new things, but also trying to imply that knowledge to our daily life activities.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2004-2016</span></h2>
                        <p>I did my primay education at Frontier Corps Public School based in Chitral(my home town), Pakistan.
                          For higer Education, I moved to Aga Khan Higher Seconday School which is also based in Chitral. I studied
                          pre-engineering in HSSC, and later decided to pursue CS as my career.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
