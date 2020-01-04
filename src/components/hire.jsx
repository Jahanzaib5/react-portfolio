import React, { Component } from 'react'

export default class HireMe extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects" style={{marginBottom:'6%'}}>
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Want a work done?</span>
								<h2 className="colorlib-heading animate-box">You can hire me!</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/upwork.png)'}}>
									<a href="https://www.upwork.com/freelancers/~01ac4b52075700256c">
										<div className="desc">
											<div className="con">
												<p className="icon">
													<span style={{color:'black', fontWeight:'bold', fontSize:'18px'}}><a><i className="icon-share3" /></a> Upwork</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/fiverr.jpg)'}}>
									<a href="https://www.fiverr.com/users/jahanzaib095/">
										<div className="desc">
											<div className="con">
												<p className="icon">
													<span style={{color:'black', fontWeight:'bold', fontSize:'18px'}}><a><i className="icon-share3" /></a>Fiverr</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/freelancer.png)'}}>
									<a href="https://www.freelancer.com/u/jahanzaib05">
										<div className="desc">
											<div className="con">
												<p className="icon">
													<span style={{color:'black', fontWeight:'bold', fontSize:'18px'}}><a><i className="icon-share3" /></a>Freelancer</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-12 animate-box" data-animate-effect="fadeInTop">
							<p>Click on the boxes above, which will direct you to the respective sites.</p>
						</div>
						
					</div>
				</section>
      </div>
    )
  }
}
