import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

  //     <section id="portfolio">

  //     <div className="row">

  //        <div className="twelve columns collapsed">

  //           <h1>Check Out Some of My Works.</h1>

  //           <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
  //               {projects}
  //           </div>
  //         </div>
  //     </div>
  //  </section>

  return (
    <section id="skills">
      <div className="row skills">

        <div className="two columns header-col">
            <h1><span>Skills</span></h1>
        </div>

        <div className="ten columns main-col">
          <div class="row" style={{textAlign: 'center'}} >
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-html5-plain" style={{fontSize: 500 + '%'}}></i>
              <p>html5</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-nodejs-plain" style={{fontSize: 500 + '%'}}></i>
              <p>nodeJS</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-react-original" style={{fontSize: 500 + '%'}}></i>
              <p>React</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-express-original" style={{fontSize: 500 + '%'}}></i>
              <p>express</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-jquery-plain" style={{fontSize: 500 + '%'}}></i>
              <p>jQuery</p>
            </div>
          </div>
          <div class="row" style={{textAlign: 'center'}} >
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-css3-plain" style={{fontSize: 500 + '%'}}></i>
              <p>css3</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-go-plain" style={{fontSize: 500 + '%'}}></i>
              <p>Go</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-python-plain" style={{fontSize: 500 + '%'}}></i>
              <p>Python</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-postgresql-plain" style={{fontSize: 500 + '%'}}></i>
              <p>Postgres</p>
            </div>
            <div style={{textAlign: 'center', display: "inline-block", padding: 20 + 'px'}}>
              <i class="devicon-mongodb-plain" style={{fontSize: 500 + '%'}}></i>
              <p>MongoDB</p>
            </div>

          </div>
        </div>
      </div>
      {/* <div className="row skills">
        <div className="two columns header-col">
            <h1><span>Practice</span></h1>
        </div>
      </div> */}
    </section>

    );
  }
}

export default Portfolio;
