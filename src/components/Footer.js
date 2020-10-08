import React from "react";
import IconImage from "../images/icon.png";

const Footer = () => (
  <div className="site-footer">
    <img
      className="iconImage"
      src={IconImage}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      }}
      alt="Icon"
    />
    <h4 className="text-center">Algojam</h4>
    <p className="text-center">All up in da interwebs!</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://twitter.com/dirkjobosman"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dirkbosman/algojam"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.producthunt.com/posts/algojam"
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
