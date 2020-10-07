import React from "react";
import IconImage from "../images/icon.png";

const Footer = () => (
  <div className="site-footer">
    {/* <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossOrigin="anonymous"
    /> */}
    <img
      className="iconImage"
      src={IconImage}
      style={{}}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      }}
      alt="Icon Image"
    />
    <h4 className="text-center">Algojam</h4>
    <p className="text-center">All up in da interwebs!</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.producthunt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="producthunt"
          >
            <i className="fab fa-product-hunt fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
