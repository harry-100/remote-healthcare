import React from "react";

import "./About.css";
import Aboutpic from "../../Assets/Images/about.jpg";
import Team1 from "../../Assets/Images/team-memb1.jpg";
import Team2 from "../../Assets/Images/team-memb2.jpg";
import Team3 from "../../Assets/Images/team-memb3.jpg";
import Team4 from "../../Assets/Images/team-memb4.jpg";
function About() {
  return (
    <>
      <section id="about">
        <div id="about-01">
          <div className="content-box-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div id="about-left">
                    <div className="vertical-heading">
                      <h2>
                        A <strong className="blue-text">Story</strong> About Us
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div id="about-right">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum repudiandae deserunt odit autem aut incidunt dolorum
                      eveniet velit sapiente a, dignissimos excepturi fugit
                      ipsam optio sed natus nobis, sequi aliquam?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum repudiandae deserunt odit autem aut incidunt dolorum
                      eveniet velit sapiente a, dignissimos excepturi fugit
                      ipsam optio sed natus nobis, sequi aliquam
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum repudiandae deserunt odit autem aut incidunt dolorum
                      eveniet velit sapiente a, dignissimos excepturi fugit
                      ipsam optio sed natus nobis, sequi aliquam
                    </p>
                  </div>
                </div>
              </div>

              <div id="about-bottom">
                <section className="our-team">
                  <div className="container">
                    <div className="row team-row">
                      <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                          <img src={Team1} alt="" />
                          <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                          <img src={Team2} alt="" />
                          <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                          <img src={Team3} alt="" />
                          <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                          <img src={Team4} alt="" />
                          <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
