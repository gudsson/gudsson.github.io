import React from "react";
import Obfuscate from "react-obfuscate";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href="https://linkedin.com/in/gudsson">
                <i className={"fa fa-linkedin"}></i>
              </a>
            </li>
            <li>
              <a href="http://github.com/gudsson">
                <i className={"fa fa-github"}></i>
              </a>
            </li>
            <li>
              <a href="http://twitter.com/gudsson">
                <i className={"fa fa-twitter"}></i>
              </a>
            </li>

            <li>
              <Obfuscate email="gudsson@gmail.com" aria-label="Email Me">
                <i className={"fa fa-envelope"}></i>
              </Obfuscate>
            </li>
          </ul>
          <div
            style={{
              textAlign: "center",
              display: "inline-block",
              padding: 20 + "px",
            }}
          >
            <img
              src="https://www.codewars.com/users/aasiaat/badges/large"
              alt="codewars badge"
            />
          </div>

          {/* <ul className="copyright">
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul> */}
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
