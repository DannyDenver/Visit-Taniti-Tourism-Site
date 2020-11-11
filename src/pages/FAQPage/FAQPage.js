import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';

export default function FAQPage(props) {

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
        imageSrc={"https://www.pier39.com/wp-content/uploads/2017/01/Luau_1_1170x550.jpg"} imageTitle={"FAQ"} />
    </Fragment>
  )
}


