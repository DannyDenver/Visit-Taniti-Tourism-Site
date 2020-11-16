import React, { Component, Fragment } from 'react';
import './ThreeImages.css'

export default function ThreeImages(props) {
  return (
    <Fragment>
      <div className="container pt-3 pb-2">
        {props.header ?
          <div className="row text-center">
            <div className="col col-12 m-3">
              <h1>{props.header}</h1>
              {
                props.subheader ?
                  <p>{props.subheader}</p> : null
              }
            </div>
          </div> : null
        }

        <div className="row m-6 pb-3 text-center align-items-center">
          <div className="col col-md-4">
            <a href="/">
              <img className="rounded img-fluid section-image" src={props.imageOne} alt="dance contest"></img>
            </a>
          </div>
          <div className="col col-md-4">
            <a href="/">
              <img className="rounded img-fluid section-image" src={props.imageTwo} alt="dance contest"></img>
            </a>
          </div>
          <div className="col col-md-4">
            <a href="/">
              <img className="rounded img-fluid section-image" src={props.imageThree} alt="dance contest"></img>
            </a>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-md-4 text-center">
            <a href="/">
              <h3> {props.headerOne ? props.headerOne : 'Adventure'} </h3>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              {
                props.linkText ? <a href="/">{ props.linkText }</a> : null
              }
            </p>
          </div>
          <div className="col col-md-4 text-center">
            <a href="/">
              <h3> {props.headerTwo ? props.headerTwo : 'Cuisine'} </h3>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            {
              props.linkText ? <a href="/">{ props.linkText }</a> : null
              }
            </p>
          </div>
          <div className="col col-md-4 text-center">
            <a href="/">
              <h3> {props.headerThree ? props.headerThree : 'Explore'} </h3>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            {
                props.linkText ?  <a href="/">{ props.linkText }</a> : null
              }
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
