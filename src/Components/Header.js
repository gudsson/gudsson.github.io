import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Résumé</a></li>
	         <li><a className="smoothscroll" href="#skills">Skills</a></li>
	         <li><a className="smoothscroll" href="#contact">Contact</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#footer">Footer</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Jay Gudsson.</h1>
            <h3>I'm a Vancouver-based <span>Full Stack Software Developer</span> focused on Backend Development.</h3>
            <hr />
            <ul className="social">
               <li>
                  <a href="https://linkedin.com/in/gudsson"><i className={"fa fa-linkedin"}></i></a>
               </li>
               <li>
                  <a href="http://github.com/gudsson"><i className={"fa fa-github"}></i></a>
               </li>
               <li>
                  <a href="http://twitter.com/gudsson"><i className={"fa fa-twitter"}></i></a>
               </li>

               <li>
                  <Obfuscate email="gudsson@gmail.com" aria-label="Email Me">
                    <i className={"fa fa-envelope"}></i>
                  </Obfuscate>
               </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
