import React, { Component } from 'react';

class About extends Component {
  render() {

   //  if(this.props.data){
   //    var name = this.props.data.name;
   //    var profilepic= "images/"+this.props.data.image;
   //    var bio = this.props.data.bio;
   //    var street = this.props.data.address.street;
   //    var city = this.props.data.address.city;
   //    var state = this.props.data.address.state;
   //    var zip = this.props.data.address.zip;
   //    var phone= this.props.data.phone;
   //    var email = this.props.data.email;
   //    var resumeDownload = this.props.data.resumedownload;
   //  }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="Jay Gudsson Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
               Previously, I spent 5 years working in construction as a Project Engineer.  I decided to persue my interest in software after demonstrating an ability to build spreadsheets and small apps to improve workflow, and to fulfill my desire to work with more modern technologies.
            </p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href="/CV.pdf" className="button"><i className="fa fa-eye"></i>View Résumé</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
