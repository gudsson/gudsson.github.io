import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <h2>About Me</h2>
        </div>
        <div className="row">
          <div className="three columns" style={{ textAlign: "center" }}>
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Jay Gudsson Profile Pic"
              // style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="nine columns main-col">
            <p>
              I'm a Software Developer with experience in JavaScript/TypeScript,
              Go, Python, SQL & NoSQL Databases, Docker, and AWS Infrastructure.
            </p>
            <p>
              Previously, I spent 5 years working in construction as a Building
              Envelope and Structural Restoration Engineer. I decided to persue
              my interest in software after demonstrating an ability to build
              spreadsheets and small apps to improve workflow. Computers get to
              do all the interesting stuff in civil engineering, anyway.
            </p>
          </div>
        </div>

        <div className="row download" style={{ textAlign: "center" }}>
          <br />
          <p>
            <a href="/CV.pdf" className="button">
              <i className="fa fa-eye"></i>View Résumé
            </a>
          </p>
        </div>
        <div
          className="row last"
          style={{ borderBottom: "1px solid #444444" }}
        ></div>

        {/* <div className="row skills"> */}
        <div className="row skills" style={{ paddingTop: "80px" }}>
          {/* <div className="one columns collapsed"></div> */}
          <div className="twelve columns collapsed">
            <h2>
              {/* <span>Skills</span> */}
              My Skills
            </h2>
          </div>

          <div className="twelve columns" style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-html5-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>html5</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-graphql-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>GraphQL</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-nodejs-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>nodeJS</p>
              </div>
            </div>
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-react-original"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>React</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-express-original"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>express</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-jquery-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>jQuery</p>
              </div>
            </div>
          </div>
          <div className="twelve columns" style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-css3-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>css3</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-go-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>Go</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-python-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>Python</p>
              </div>
            </div>
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-postgresql-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>Postgres</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-mongodb-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>MongoDB</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i
                  className="devicon-docker-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>Docker</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    );
  }
}

export default About;
