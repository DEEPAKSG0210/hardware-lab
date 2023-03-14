import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-container1">
          <nav className="home-navbar">
            <div className="home-desktop">
              <div className="home-main"></div>
              <Link to="/" className="home-link link">
                Equipments
              </Link>
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
            <Link to="/log-in" className="home-navlink">
              <div className="home-sign-up-btn">
                <span className="home-sign-up">Log in</span>
              </div>
            </Link>
            <Link to="/" className="home-navlink1">
              <img
                alt="pastedImage"
                src="/playground_assets/logo-200h.png"
                className="home-finbest"
              />
            </Link>
          </nav>
        </div>
        <img
          alt="image"
          src="/playground_assets/screenshot%202023-03-12%202017481-400h.jpg"
          className="home-image"
        />
        <div className="home-container2">
          <img
            alt="image"
            src="/playground_assets/download1-600h.jpeg"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-container3"></div>
    </div>
  )
}

export default Home
