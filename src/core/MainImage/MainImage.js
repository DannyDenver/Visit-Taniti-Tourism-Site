import React from 'react';
import './MainImage.css';

export default function MainImage(props) {

  return (
  <div className="mainImageContainer">
    <img className="homescreenPicture" src={props.imageSrc} alt="mainImage" />
    <div className="centered">{props.imageTitle} </div>
    <div className="main-image-subtitle">{props.imageSubtitle} </div>
  </div>
  )
}
