import React, { Fragment } from 'react';

export default function TwoImages(props) {
  return (
    <Fragment>
      <div className="container pt-3 pb-2">
      { props.header ? 
        <div className="row text-center">
          <div className="col col-12 m-3">
            <h1>{ props.header }</h1>
            {
              props.subheader ? 
              <p>{props.subheader}</p> : null
            }
          </div>
        </div> : null
      }

        <div className="row m-6 pb-3 text-center align-items-center">
          <div className="col col-md-6">
            <img className="rounded img-fluid section-image" src={props.imageOne} alt="dance contest"></img>
          </div>
          <div className="col col-md-6">
            <img className="rounded img-fluid section-image" src={props.imageTwo} alt="dance contest"></img>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-md-6 text-center">
            <h3> { props.headerOne ? props.headerOne : 'Adventure' } </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col col-md-6 text-center">
          <h3> { props.headerTwo ? props.headerTwo : 'Cuisine' } </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}