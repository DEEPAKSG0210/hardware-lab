import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './student-login.css'

const StudentLogin = (props) => {
  return (
    <div className="student-login-container">
      <Helmet>
        <title>Student-Login - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Student-Login - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <nav className="student-login-navbar">
        <div className="student-login-desktop">
          <Link to="/" className="student-login-link link">
            Equipments
          </Link>
        </div>
        <Link to="/" className="student-login-navlink">
          <img
            alt="pastedImage"
            src="/playground_assets/logo-200h.png"
            className="student-login-finbest"
          />
        </Link>
        <Link to="/" className="student-login-navlink1">
          <div className="student-login-sign-up-btn">
            <span className="student-login-sign-up">Admin Logout</span>
          </div>
        </Link>
      </nav>
      <div className="student-login-container1">
        <h1 className="student-login-text">Student Login</h1>
        <Link to="/student-details" className="student-login-navlink2 button">
          <span>
            <span className="student-login-text2">SCAN ID CARD</span>
            <br></br>
          </span>
        </Link>
        <span className="student-login-text4">OR</span>
        <div className="student-login-container2">
          <div className="student-login-container3">
            <span className="student-login-text5">Name   : </span>
            <span className="student-login-text6">Roll No : </span>
            <input
              type="text"
              placeholder="name"
              className="student-login-textinput input"
            />
            <input
              type="text"
              placeholder="roll no"
              className="student-login-textinput1 input"
            />
          </div>
        </div>
        <button className="student-login-button button">
          <Link to="/student-details" className="student-login-navlink3">
            <span>Enter</span>
            <br></br>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default StudentLogin
