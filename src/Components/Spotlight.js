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

  return (
    <>
      <section id="spotlight">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Project Spotlight</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <img
                src="/images/synapse-horizontal-tagline.png"
                alt="synapse-logo"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spotlight;
