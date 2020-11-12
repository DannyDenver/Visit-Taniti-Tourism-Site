import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText'

export default function CulturePage(props) {

  const mainImageTextStyle = {
    top: '21%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    color: '#587291',
    background: 'white',
    padding: '4px 30px',
    'border-radius': '10px'
  };

  const aboutTaniti = 'Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.';


  return (
    <Fragment>
      <MainImage mainText={mainImageTextStyle} imageSrc={"https://tahititourisme.com/wp-content/uploads/2017/05/tahiti-mana@2x.jpg"} imageTitle={"Culture"} />
      <div className="container p-5 mb-3">
        <LgImageWithText title={"Aloha! Welcome to our Island!"} description={aboutTaniti} imageSrc={"https://gotowncrier.com/wp-content/uploads/2019/10/Luau-Cov.jpg"}></LgImageWithText>
      </div>
    </Fragment>
  )
}
