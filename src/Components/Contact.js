import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="twelve columns header-col">
               <h1>Get In Touch.</h1>
            </div>

            {/* <div class="row" style={{textAlign: "center"}}> */}
               <div className="ten columns">
                  <p className="lead">If you'd like to contact me, feel free to click the envelope icon to send me an email, or reach out on one of the platforms linked to at the bottom of the page.</p>
               </div>

               <div className="two columns" style={{textAlign: "center"}}>
                  <Obfuscate email="gudsson@gmail.com" aria-label="Email Me">
                     <i className={"big-link fa fa-envelope"} style={{display: "inline", float: "none"}}></i>
                  </Obfuscate>
               </div>
            {/* </div> */}
         </div>

         {/* <div className="row">
            <div className="twelve columns">
               <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                     </div>
                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                     </div>
                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                     </div>
                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>
                     <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>
               <div id="message-warning"> Error boy</div>
               <div id="message-success">
               <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
            </div>
         </div> */}
      </section>
    )
  }
}

export default Contact;
