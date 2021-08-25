import React from 'react';
import Obfuscate from 'react-obfuscate';

const Footer = ({ data }) => {
  if (!data) return <></>

  return (
    <footer id="footer">

      <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
                {data.social.map(network => 
                  <li key={network.name}>
                    <a href={network.url}>
                      <i className={network.className}></i>
                    </a>
                  </li>
                )}
                <li>
                  <Obfuscate email="gudsson@gmail.com" aria-label="Email Me">
                    <i className={"fa fa-envelope"}></i>
                  </Obfuscate>
                </li>      
            </ul>

            <ul className="copyright">
                <li>&copy; Copyright {(new Date()).getFullYear()} Jay Gudsson</li>
                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  )
}

export default Footer;
