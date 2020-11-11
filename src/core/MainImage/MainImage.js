import React from 'react';
import './MainImage.css';

export default function MainImage(props) {

  const transform = props.flipImage ? {
    transform: 'scaleX(-1)'
  } : null;

  return (
    <div className="mainImageContainer">
      <img className={`mainImage ${props.flipImage ? 'flip' : ''} `} src={props.imageSrc} alt="mainImage" />
      <div style={props.mainText} className="centered">{props.imageTitle} </div>
      <div className="main-image-subtitle">{props.imageSubtitle} </div>
    </div>
  )
}
