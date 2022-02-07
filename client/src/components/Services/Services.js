import React from "react";
import ServicePic from "../../Assets/Images/services.jpg";
import "./Services.css";
function Services() {
  return (
    <div id="services-01">
      <div id="services-01">
        <div class="content-box-lg">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="horizontal-heading">
                  <h5>WHAT WE DO</h5>
                  <h2 className="blue-text ">Our Services</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7">
                <img
                  src={ServicePic}
                  alt="service image"
                  class="img-responsive"
                />
              </div>
              <div class="col-md-5">
                <div class="service">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="icon text-right">
                        <i class="fas fa-tooth"></i>
                      </div>
                    </div>
                    <div class="col-md-10 push">
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

                <div class="service">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="icon text-right">
                        <i class="fas fa-brain"></i>
                      </div>
                    </div>
                    <div class="col-md-10">
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

                <div class="service">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="icon text-right">
                        <i class="fas fa-allergies"></i>
                      </div>
                    </div>
                    <div class="col-md-10">
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
  );
}

export default Services;
