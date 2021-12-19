import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Jay Gudsson Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Previously, I spent 5 years working in construction as a Building
              Envelope and Structural Restoration Engineer. I decided to persue
              my interest in software after demonstrating an ability to build
              spreadsheets and small apps to improve workflow, and to fulfill my
              desire to work with more <span id="cv">modern technologies.</span>
            </p>
            {/* <br id="cv" /> */}
            <div className="row">
              <div className="columns download">
                <p>
                  <a href="/CV.pdf" className="button">
                    <i className="fa fa-eye"></i>View Résumé
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
