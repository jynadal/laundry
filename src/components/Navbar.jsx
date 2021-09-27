import React from "react";
// import { logo } from "../images/svg/hanger-with-clothes.svg";
import { ReactComponent as Logo } from "../images/svg/hanger-with-clothes.svg";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <a className="navbar-brand" href="index.html">
          {/* <img src={logo} alt="logo LavNet" /> */}
          <Logo />
          Pressing LavNet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                A propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pricing.html">
                Services
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="faq.html">
                FAQ
                </a>
                </li>
            <li className="nav-item ">
            <a className="nav-link dropdown-toggle" href="#">
            Blog
            </a>
          </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#galerie">
                Galerie
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
