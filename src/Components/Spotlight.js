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
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Project Spotlight</h1>

            {/* <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            > */}
            <div className="row">
              <div className="six columns collapsed">
                <img
                  src="/images/synapse-horizontal-tagline.png"
                  alt="synapse-logo"
                ></img>
              </div>
              <div className="six columns collapsed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  mattis vestibulum sodales. Duis luctus a sapien in ultrices.
                  Morbi faucibus dolor ut lacus vestibulum finibus quis sed dui.
                </p>
                <p>
                  Praesent eu ipsum libero. Mauris fringilla faucibus blandit.
                  Phasellus dolor sapien, placerat et elementum non, suscipit eu
                  neque. Nam feugiat tincidunt purus a fringilla.
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
                      alt="Test"
                      src="images/portfolio/canadian-wanderlust.jpg"
                      // style={{ display: "block", position: "relative" }}
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
                        // onMouseLeave={alert("mouse left")}
                        // style={{ display: "block", position: "relative" }}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Spotlight;
