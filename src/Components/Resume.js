import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>BC Building Science & Sense Engineering</h3>
                  <p className="info">
                    Civil Engineer-in-Training <span>&bull;</span>
                    <em className="date">2016 - 2020</em>
                  </p>
                  <ul>
                    <li>
                      Consulted on building envelope and structural remediation
                      work.
                    </li>
                    <li>
                      Automated structural and financial analysis spreadsheets
                      using VBA.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>Launch School</h3>
                  <p className="info">
                    Online Software Engineering Program <span>&bull;</span>
                    <em className="date">2020 - 2021</em>
                  </p>
                  <ul>
                    <li>Mastery-based learning of vanilla JavaScript</li>
                    <li>Database foundations with PostgreSQL</li>
                    <li>Front-End Development with Handlebars and jQuery.</li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>University of British Columbia </h3>
                  <p className="info">
                    Bachelor of Applied Science (Civil Engineering){" "}
                    <span>&bull;</span>
                    <em className="date">2009 - 2014</em>
                  </p>
                  <ul>
                    <li>Gradulated with Distinction (3.95 GPA)</li>
                    <li>
                      Advanced courses in BIM Modelling, Concrete Design, and
                      Structural Analysis.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
