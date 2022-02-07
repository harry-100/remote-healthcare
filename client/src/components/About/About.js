import React from "react";

import "./About.css";
import Aboutpic from "../../Assets/Images/about.jpg";
function About() {
  return (
    <>
      <section id="about">
        <div id="about-01">
          <div class="content-box-lg">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div id="about-left">
                    <div class="vertical-heading">
                      <h2>
                        A <strong className="blue-text">Story</strong> About Us
                      </h2>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
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

              <div class="row">
                <div class="col-md-12">
                  <div id="about-bottom">
                    <img
                      src={Aboutpic}
                      alt="about image"
                      class="img-responsive img-about text center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
