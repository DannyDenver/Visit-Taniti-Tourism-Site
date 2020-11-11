import React, { Component } from 'react';
import './LgImageWithText.css'

export default function LgImageWithText(props) {

  return (
    <div className="container">
      <div className="row p-5 mt-3 mb-3 align-items-center">
        <div className="col col-md-5 offset-md-1">
          <img className="rounded img-fluid section-image" src={props.imageSrc} alt="dance contest"></img>
        </div>
        <div className="col col-sm-6 align-self-start">
        <h2 className="pt-5">{props.title}</h2>
        <p>
        {
          props.description ? props.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
        </p>
        <a href="/">Learn More -> </a>
        </div>
      </div>
    </div>
  )
}
