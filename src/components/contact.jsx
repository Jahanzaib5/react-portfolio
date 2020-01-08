import React, { Component } from "react";
import pic from '../images/contact.png';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-5 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Keep in touch</span>
                <h2 className="colorlib-heading">Contact me!</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-sm-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p>Feel free to contact me as per the details below:</p>
                <br/>
                
              </div>
              <div 
                className="col-md-6 col-sm-12 animate-box"
                data-animate-effect="fadeInRight"
              >
                <img src={pic}/>
              </div>
            </div>
          </div>
          <div className="row" style={{marginBottom: "2%"}}>
            <div className="col-md-12 animate-box">
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-load-more">
                  Back To Top
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
