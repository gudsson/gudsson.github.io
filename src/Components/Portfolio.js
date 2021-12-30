import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    const projectData = [
      {
        title: "RedressedBin👗",
        image: "redressedbin.png",
        url: "https://bin.gudsson.ca",
        paragraphs: [
          "A RequestBin-style application for collecting and analyzing HTTP/webhook requests in real-time.",
          "Built using React, Bootstrap, Express, MongoDB, and Socket.io",
        ],
      },
      {
        title: "Hockey Boxscore Scraper",
        image: "aasistats.png",
        url: "https://github.com/gudsson/ahl_0/",
        paragraphs: [
          "A Python scraper using the BeautifulSoup library to extract shot location data from minor league hockey boxscores for using in developing Expected Goal (xG) models.",
        ],
      },
      {
        title: "ProjectHub",
        image: "projecthub.png",
        paragraphs: [
          "A Trello-like project management application.",
          "Built using React/Redux, Express, and MongoDB.",
        ],
      },
    ];

    if (projectData) {
      var projects = projectData.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>

                    {projects.paragraphs.map((sentence) => {
                      return <p>{sentence}</p>;
                    })}

                    {projects.url && (
                      <div style={{ textAlign: "center" }}>
                        <div className="link-icon">
                          <i className="fa fa-link"></i>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Other Work</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-thirds cf"
                // className="bgrid-quarters s-bgrid-halves cf"
                // style={{ textAlign: "center" }}
              >
                {projects}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
