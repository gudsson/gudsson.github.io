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
              I'm a Full-Stack Software Developer with experience in
              JavaScript/TypeScript, Go, Python, SQL & NoSQL Databases, Docker, and AWS
              Infrastructure.
            </p>
            <p>
              Prior to my time as a Growth and Developer Experience Engineer at Nylas, I
              spent 5 years working in construction as a Building Envelope and Structural
              Restoration Engineer. I decided to persue my interest in software after
              demonstrating an ability to build spreadsheets and small apps to improve
              workflow. Computers get to do all the interesting stuff in civil
              engineering, anyway.
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
        <div className="row last" style={{ borderBottom: "1px solid #444444" }}></div>

        <div className="row skills" style={{ paddingTop: "80px" }}>
          <div className="twelve columns collapsed">
            <h2>My Skills</h2>
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
                  className="devicon-typescript-plain"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>TypeScript</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-nextjs-line" style={{ fontSize: 500 + "%" }}></i>
                <p>Next.js</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-svelte-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>SvelteKit</p>
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
                  className="devicon-express-original"
                  style={{ fontSize: 500 + "%" }}
                ></i>
                <p>Express</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-jest-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>Jest</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-go-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>Go</p>
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
                <i className="devicon-python-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>Python</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-flask-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>Flask</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-graphql-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>GraphQL</p>
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
                <i className="devicon-mongodb-plain" style={{ fontSize: 500 + "%" }}></i>
                <p>MongoDB</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  padding: 20 + "px",
                }}
              >
                <i className="devicon-docker-plain" style={{ fontSize: 500 + "%" }}></i>
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
