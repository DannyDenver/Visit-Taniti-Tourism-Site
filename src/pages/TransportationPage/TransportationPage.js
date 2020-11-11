import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';

export default function TransportationPage(props) {

  const mainImageTextStyle = {
    top: '21%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    color: '#247494',
    background: 'white',
    padding: '4px 30px',
    'border-radius': '10px'
  };

  return (
    <Fragment>
      <MainImage mainText={mainImageTextStyle} flipImage={true}
        imageSrc={"https://aruba.bynder.com/m/50d860e03c94f2b8/desktop_letterbox_retina-Family-Biking-on-the-Linear-Park.jpg"} imageTitle={"Transportation"} />
    </Fragment>
  )
}

