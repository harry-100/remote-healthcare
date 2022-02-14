import React from "react";
import ServicePic from "../../Assets/Images/services.jpg";
import "./Services.css";
function Services() {
  return (
    <div className="service">
      <div id="services-01">
        <div id="services-01">
          <div className="content-box-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="horizontal-heading">
                    <h5>WHAT WE DO</h5>
                    <h2 className="blue-text ">Our Services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <img
                    src={ServicePic}
                    alt="service image"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-5">
                  <div className="service">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="icon text-right">
                          <i className="fas fa-tooth"></i>
                        </div>
                      </div>
                      <div className="col-md-10 push">
                        <h5>Service one</h5>
                        <h4>Dental</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Soluta quam ab eos sapiente temporibus sunt ad
                          tenetur iure veritatis vel! Fugiat a, magni explicabo
                          nihil libero nam modi quam aliquid.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="icon text-right">
                          <i className="fas fa-brain"></i>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <h5>Service 02</h5>
                        <h4>Psychiatrist</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Soluta quam ab eos sapiente temporibus sunt ad
                          tenetur iure veritatis vel! Fugiat a, magni explicabo
                          nihil libero nam modi quam aliquid.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="service">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="icon text-right">
                          <i className="fas fa-allergies"></i>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <h5>Service 03</h5>
                        <h4>Dermatologist</h4>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Soluta quam ab eos sapiente temporibus sunt ad
                          tenetur iure veritatis vel! Fugiat a, magni explicabo
                          nihil libero nam modi quam aliquid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section split */}

      <section className="key-features">
        <div className="container">
          <div className="inner-title text-center">
            <h2>Our Key Features</h2>
            <p>Take a look at some of our key features</p>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-hospital-alt"></i>
                <h5>Newest Technologies</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-user-md"></i>
                <h5>Experianced Doctors</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-briefcase-medical"></i>
                <h5>High Customer Satisfaction</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-capsules"></i>
                <h5>Pharma Pipeline</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="fas fa-prescription-bottle-alt"></i>
                <h5>Pharma Team</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="single-key">
                <i className="far fa-thumbs-up"></i>
                <h5>High Quality treatments</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut erat nec leo lobortis blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
