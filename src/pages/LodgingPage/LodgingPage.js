import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText'
import './LodgingPage.css';


export default function LodgingPage(props) {

  const mainImageTextStyle = {
    top: '21%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    color: '#17AAB5',
    background: 'white',
    padding: '4px 30px',
    'border-radius': '10px'
  };

  const aboutTaniti = 'Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.';


  return (
    <Fragment>
      <MainImage mainText={mainImageTextStyle} flipImage={true}
       imageSrc={"https://www.tahiti.com/images1/gallery/Vahine-Island-Beach-Bungalow-2000x1200_29886.jpg"} imageTitle={"Lodging"} />

       <div className="container mt-5 mb-3">
       <div className="row justify-content-center">
          <div className="col col-8 text-center">
          <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary active">All</button>
          <button type="button" className="btn btn-secondary">Hostels</button>
          <button type="button" className="btn btn-secondary">Four Star Hotel</button>
          <button type="button" className="btn btn-secondary">Family Owned Hotels</button>
          <button type="button" className="btn btn-secondary">Bed and Breakfasts</button>      
          </div>

          <div> ** All lodging is regulated by the Tanitian government to meet high standards. **</div>
       </div>
     </div>
     </div>
      <LgImageWithText title={"Aloha! Welcome to our Island!"} description={aboutTaniti} imageSrc={"https://gotowncrier.com/wp-content/uploads/2019/10/Luau-Cov.jpg"}></LgImageWithText>
    </Fragment>
  )
}
