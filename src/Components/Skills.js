import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="row skills">
        <div className="two columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="ten columns main-col">
          <div className="row" style={{ textAlign: "center" }}>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                padding: 20 + "px",
              }}
            >
              <i className="devicon-html5-plain" style={{ fontSize: 500 + "%" }}></i>
              <p>html5</p>
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
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                padding: 20 + "px",
              }}
            >
              <i className="devicon-nodejs-plain" style={{ fontSize: 500 + "%" }}></i>
              <p>nodeJS</p>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                padding: 20 + "px",
              }}
            >
              <i className="devicon-nextjs-plain" style={{ fontSize: 500 + "%" }}></i>
              <p>Next.nodeJS</p>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                padding: 20 + "px",
              }}
            >
              <i className="devicon-express-original" style={{ fontSize: 500 + "%" }}></i>
              <p>express</p>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                padding: 20 + "px",
              }}
            >
              <i className="devicon-jquery-plain" style={{ fontSize: 500 + "%" }}></i>
              <p>jQuery</p>
            </div>
          </div>
          <div className="row" style={{ textAlign: "center" }}>
            <div
              style={{
                textAlign: "center",
                display: "inline-block",
                padding: 20 + "px",
              }}
            >
              <i className="devicon-css3-plain" style={{ fontSize: 500 + "%" }}></i>
              <p>css3</p>
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
              <i className="devicon-postgresql-plain" style={{ fontSize: 500 + "%" }}></i>
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
      </div>
    </section>
  );
};

export default Skills;
