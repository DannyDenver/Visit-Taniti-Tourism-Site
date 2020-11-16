import React, { Component } from 'react';
import './LgImageWithText.css'

export default function LgImageWithText(props) {

  return (

      <div className="row mb-5">
        <div className="col col-sm-6 tex-center">
          <img className="rounded img-fluid" src={props.imageSrc} alt="dance contest"></img>
        </div>
        <div className="col col-sm-6 align-self-center">
          <h2>{props.title}</h2>
          <p>
            { props.subTitle ?  <div>{props.subTitle}</div> : null }
            {
              props.description ? props.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          </p>
          <a href="/">{ props.linkText ? props.linkText : "Learn More ->" } </a>
        </div>
      </div>
  )
}
