import React from "react";

const Spotlight = () => {
  // const projectData = [
  //   {
  //     title: "Test",
  //     image: "canadian-wanderlust.jpg",
  //     url: "https://google.ca",
  //     category: "none",
  //   },
  // ];

  // if (projectData) {
  //   var projects = projectData.map(function (projects) {
  //     var projectImage = "images/portfolio/" + projects.image;
  //     return (
  //       <div key={projects.title} className="columns portfolio-item">
  //         <div className="item-wrap">
  //           <a href={projects.url} title={projects.title}>
  //             <img alt={projects.title} src={projectImage} />
  //             <div className="overlay">
  //               <div className="portfolio-item-meta">
  //                 <h5>{projects.title}</h5>
  //                 <p>{projects.category}</p>
  //               </div>
  //             </div>
  //             <div className="link-icon">
  //               <i className="fa fa-link"></i>
  //             </div>
  //           </a>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  const animate = (e) => {
    e.target.src = `${e.target.src.slice(0, -4)}.gif`;
  };

  const killAnimation = (e) => {
    e.target.src = `${e.target.src.slice(0, -4)}.png`;
  };

  return (
    <>
      <section id="spotlight">
        <div className="row title">
          <div classname="title-container">
            <h1>Project Spotlight: </h1>
            <img
              src="/images/synapse-inline.png"
              alt="synapse-logo"
              style={{ display: "inline", height: "2em" }}
            ></img>
          </div>
        </div>
        {/* <div className="row">
          <div className="eight columns collapsed">
            <p>
              <a
                href="https://synapse-gateway.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Synapse
              </a>{" "}
              is an open-source tool that builds, deploys, and monitors a
              GraphQL Gateway, enabling you to put your legacy services behind a
              single GraphQL endpoint.
              <br />
              <br />
              Synapse is built with React, Express, MongoDB, and Apollo Server.
              Components are Dockerized and run on AWS Fargate instances via the
              Copilot CLI.
            </p>
          </div>
          <div className="four columns collapsed">
            {" "}
            <div className="btn">
              <a
                href="https://synapse-gateway.github.io/case-study.html"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Case Study
              </a>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="twelve columns collapsed">
            <p>
              <a
                href="https://synapse-gateway.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Synapse
              </a>{" "}
              is an open-source tool that builds, deploys, and monitors a
              GraphQL Gateway, enabling you to put your legacy services behind a
              single GraphQL endpoint.
              <br />
              <br />
              Synapse is built with React, Express, MongoDB, and Apollo Server.
              Components are Dockerized and run on AWS Fargate instances via the
              Copilot CLI.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="twelve columns collapsed">
            <div className="bgrid-thirds cf">
              <div className="columns project-item">
                <img
                  alt="Create"
                  src="images/spotlight/create.png"
                  style={{ borderRadius: "6px" }}
                  onMouseEnter={(e) => animate(e)}
                  onMouseLeave={(e) => killAnimation(e)}
                />
                <h1>Create</h1>
              </div>
              <div className="columns project-item">
                <div>
                  <img
                    alt="Deploy"
                    src="images/spotlight/deployer.png"
                    style={{ borderRadius: "6px" }}
                    onMouseEnter={(e) => animate(e)}
                    onMouseLeave={(e) => killAnimation(e)}
                  />
                </div>
                <h1>Deploy</h1>
              </div>
              <div className="columns project-item">
                <div>
                  <img
                    alt="Monitor"
                    src="images/spotlight/monitoring.png"
                    style={{ borderRadius: "6px" }}
                    onMouseEnter={(e) => animate(e)}
                    onMouseLeave={(e) => killAnimation(e)}
                  />
                </div>
                <h1>Monitor</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div style={{ textAlign: "center" }}>
            <p>
              <a
                href="https://synapse-gateway.github.io/case-study.html"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Read The Synapse Case Study
              </a>
            </p>
          </div>
        </div>
        {/* </div> */}
        <div className="row last"></div>
      </section>
      {/* <hr /> */}
    </>
  );
};

export default Spotlight;
