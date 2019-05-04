import React from "react";

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/TAGeoforce"
            rel="noopener noreferrer"
            className="icon alt fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/tageoforce"
            rel="noopener noreferrer"
            className="icon alt fa-facebook"
            target="_blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TA-Geoforce/Natural-Disasters-Loss
"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/t-a-geoforce"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; T.A. Geoforce</li>
        <li>
          Website:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tageoforce.com/"
          >
            www.tageoforce.com
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
