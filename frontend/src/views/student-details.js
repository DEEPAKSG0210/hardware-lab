import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './student-details.css'

const StudentDetails = (props) => {
  return (
    <div className="student-details-container">
      <Helmet>
        <title>Student-Details - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Student-Details - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <nav className="student-details-navbar">
        <div id="mobile-menu" className="student-details-mobile">
          <div className="student-details-top">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="student-details-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="student-details-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="student-details-links">
            <Link to="/" className="student-details-navlink">
              Features
            </Link>
            <Link to="/" className="student-details-navlink1">
              How it works
            </Link>
            <Link to="/" className="student-details-navlink2">
              Prices
            </Link>
            <Link to="/" className="student-details-navlink3">
              Contact
            </Link>
            <div className="student-details-buttons">
              <Link to="/" className="student-details-navlink4">
                <div className="student-details-btn">
                  <span className="student-details-text">Log in</span>
                </div>
              </Link>
              <Link to="/" className="student-details-navlink5">
                <div className="student-details-btn1">
                  <span className="student-details-text01">Log in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="student-details-desktop">
          <div className="student-details-main">
            <div className="student-details-branding"></div>
          </div>
          {/* <Link to="/" className="student-details-link link">
            Equipments
          </Link> */}
          <div className="student-details-quick-actions">
            <img
              id="open-mobile-menu"
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="student-details-hamburger-menu"
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
        <Link to="/" className="student-details-navlink6">
          <img
            alt="pastedImage"
            src="/playground_assets/logo-200h.png"
            className="student-details-finbest"
          />
        </Link>
      </nav>
      <div className="student-details-container1">
        <div className="student-details-container2">
          <span className="student-details-text02">Name   : </span>
          <span className="student-details-text03">Roll No : </span>
          <input
            type="text"
            placeholder="placeholder"
            className="student-details-textinput input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="student-details-textinput01 input"
          />
        </div>
      </div>
      <div className="student-details-container3">
        <h1 className="student-details-text04">Equipments Borrowed</h1>
        <div className="student-details-container4">
          <div className="student-details-container5">
            <span className="student-details-text05">1.</span>
            <input
              type="text"
              placeholder="Item"
              className="student-details-textinput02 input"
            />
            <span className="student-details-text06">Qty</span>
            <input
              type="text"
              placeholder="Quantity"
              className="student-details-textinput03 input"
            />
            {/* <button className="student-details-button button">X</button> */}
          </div>
        </div>
        <div className="student-details-container6">
          <span className="student-details-text07">2.</span>
          <input
            type="text"
            placeholder="Item"
            className="student-details-textinput04 input"
          />
          <span className="student-details-text08">Qty</span>
          <input
            type="text"
            placeholder="Quantity"
            className="student-details-textinput05 input"
          />
          {/* <button className="student-details-button1 button">X</button> */}
        </div>
        <div className="student-details-container7">
          <span className="student-details-text09">
            <span>3.</span>
            <br></br>
            <br></br>
          </span>
          <input
            type="text"
            placeholder="Item"
            className="student-details-textinput06 input"
          />
          <span className="student-details-text13">Qty</span>
          <input
            type="text"
            placeholder="Quantity"
            className="student-details-textinput07 input"
          />
          {/* <button className="student-details-button2 button">X</button> */}
        </div>
        <div className="student-details-container8">
          <span className="student-details-text14">
            <span>4.</span>
            <br></br>
            <br></br>
          </span>
          <input
            type="text"
            placeholder="Item"
            className="student-details-textinput08 input"
          />
          <span className="student-details-text18">Qty</span>
          <input
            type="text"
            placeholder="Quantity"
            className="student-details-textinput09 input"
          />
          {/* <button className="student-details-button3 button">X</button> */}
        </div>
        <Link to="/student-login" className="student-details-navlink7">
          <div className="student-details-sign-up-btn">
            <span className="student-details-sign-up">
              <span>Logout</span>
              <br></br>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StudentDetails
