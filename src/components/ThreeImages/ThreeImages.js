import React, { Component, Fragment } from 'react';
import './ThreeImages.css'

export default function ThreeImages(props) {
  return (
    <Fragment>
      <div className="container pt-5 pb-5">
        <div className="row m-6 pb-3">
          <div className="col col-md-4">
            <img className="rounded img-fluid section-image" src={props.imageOne} alt="dance contest"></img>
          </div>
          <div className="col col-md-4">
            <img className="rounded img-fluid section-image" src={props.imageTwo} alt="dance contest"></img>
          </div>
          <div className="col col-md-4">
            <img className="rounded img-fluid section-image" src={props.imageThree} alt="dance contest"></img>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-md-4 text-center">
            <h3>Adventure</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col col-md-4 text-center">
            <h3>Cuisine</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col col-md-4 text-center">
            <h3>Explore</h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
