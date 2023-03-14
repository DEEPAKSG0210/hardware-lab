import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>Log-in - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Log-in - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <nav className="log-in-navbar">
        <div id="mobile-menu" className="log-in-mobile">
          <div className="log-in-top">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="log-in-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="log-in-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="log-in-links">
            <Link to="/" className="log-in-navlink">
              Features
            </Link>
            <Link to="/" className="log-in-navlink1">
              How it works
            </Link>
            <Link to="/" className="log-in-navlink2">
              Prices
            </Link>
            <Link to="/" className="log-in-navlink3">
              Contact
            </Link>
            <div className="log-in-buttons">
              <Link to="/" className="log-in-navlink4">
                <div className="log-in-btn">
                  <span className="log-in-text">Log in</span>
                </div>
              </Link>
              <Link to="/" className="log-in-navlink5">
                <div className="log-in-btn1">
                  <span className="log-in-text1">Log in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="log-in-desktop">
          <div className="log-in-main">
            <div className="log-in-branding"></div>
          </div>
          <Link to="/" className="log-in-link link">
            Equipments
          </Link>
          <div className="log-in-quick-actions">
            <img
              id="open-mobile-menu"
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="log-in-hamburger-menu"
            />
          </div>
        </div>
        <div>
          <DangerousHTML
            html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
          ></DangerousHTML>
        </div>
        <Link to="/" className="log-in-navlink6">
          <img
            alt="pastedImage"
            src="/playground_assets/logo-200h.png"
            className="log-in-finbest"
          />
        </Link>
        <Link to="/" className="log-in-navlink7">
          Back
        </Link>
      </nav>
      <div className="log-in-container1">
        <div className="log-in-container2">
          <div className="log-in-container3">
            <div className="log-in-container4">
              <h1 className="log-in-text2 accordion-element">Admin Login</h1>
              <div className="log-in-container5">
                <span className="log-in-text3">Username :</span>
                <span className="log-in-text4">Password : </span>
                <input
                  type="text"
                  placeholder="ID"
                  className="log-in-textinput input"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="log-in-textinput1 input"
                />
                <button className="log-in-button button">
                  <Link to="/student-login" className="log-in-navlink8">
                    <span>Enter</span>
                    <br></br>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="log-in-container6">
          <img
            alt="image"
            src="/playground_assets/secure-600h.jpg"
            className="log-in-image1"
          />
        </div>
      </div>
    </div>
  )
}

export default LogIn
