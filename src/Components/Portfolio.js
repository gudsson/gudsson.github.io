import React from "react";

const Portfolio = () => {
  const projectData = [
    {
      title: "PuckPedia's PuckGM",
      image: "puckgm.png",
      url: "https://gordle.herokuapp.com/",
      paragraphs: [
        "Part of a two-person team that built a fantasy hockey platform.",
      ],
      tech: "Nextjs, Prisma, and Redis",
    },

    {
      title: "Hockey Boxscore Scrapers",
      image: "aasistats.png",
      // url: "https://github.com/gudsson/ahl_0/",
      paragraphs: [
        "Webscrapers to extract shot location data from both NHL and AHL hockey boxscores for using in developing Expected Goal (xG) models.",
      ],
      tech: "Go (Colly), Python (BeautifulSoup), SQLite",
    },
    {
      title: "RedressedBin👗",
      image: "redressedbin.png",
      // url: "https://bin.gudsson.ca",
      paragraphs: [
        "A RequestBin-style application for collecting and analyzing HTTP/webhook requests in real-time.",
      ],
      tech: "React, Bootstrap, Express, MongoDB, and Socket.io",
    },
    {
      title: "Gordle",
      image: "gordle.png",
      url: "https://gordle.herokuapp.com/",
      paragraphs: ["A Wordle clone that uses only NHL player names."],
      tech: "Svelte, Express",
    },
    // {
    //   title: "ProjectHub",
    //   image: "projecthub.png",
    //   url: "https://github.com/synapse-gateway/project-hub",
    //   paragraphs: [
    //     "A Trello-like project management application.",
    //     "Built using React/Redux, Express, and MongoDB.",
    //   ],
    //   tech: "React | Redux, Express, MongoDB",
    // },
  ];

  // const openTab = (e) => {
  //   window.open(e.currentTarget.dataset.url, "_blank").focus();
  // };

  if (projectData) {
    var projects = projectData.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="clickable">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>

                  {projects.paragraphs.map((sentence) => {
                    return <p key={sentence}>{sentence}</p>;
                  })}
                  <p className="tech">{projects.tech}</p>
                  {projects.url && (
                    <div
                      style={{ textAlign: "center", cursor: "pointer" }}
                      onClick={() => window.open(projects.url, "_blank")}
                    >
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
            <h1>Select Other Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
