import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const element = (
    <div className='superover'>
      <h1 className='heading'>Super Over League</h1>
      <div className='images-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
          className='image-logo' alt="logo"
        />
        <img
          src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
          className='image-logo' alt="logo"
        />
      </div>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
  