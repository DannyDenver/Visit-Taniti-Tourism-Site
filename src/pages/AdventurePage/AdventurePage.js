import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';
import ThreeImages from '../../components/ThreeImages/ThreeImages';


export default function AdventurePage(props) {

  const mainText = {
    top: '21%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    color: '#07B053',
    background: 'white',
    padding: '4px 30px',
    'border-radius': '10px'
  };

  return (
    <Fragment>
      <MainImage mainText={mainText} imageSrc={"https://www.arenal.net/sites/www-origin.arenal.net/files/inline-images/1-arenal-volcano.jpg"} imageTitle={"Adventure"} />
      <ThreeImages header={'Beaches'}
        imageOne={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F07%2Fmauna-kea-besthawaii0216.jpg"}
        imageTwo={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F07%2Fhanalei-bay-besthawaii0216.jpg"}
        imageThree={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F07%2Fmakena-besthawaii0216.jpg"}
        headerOne={'Tuna Beach'}
        headerTwo={'Maka Muki Beach'}
        headerThree={'Hammerhead Beach'}
        >
      </ThreeImages>
      <ThreeImages header={'Taniti City'}
        imageOne={"https://www.gohawaii.com/sites/default/files/styles/double_column_large/public/content-images/01268%20-%20luana%20hills%20%233a_B%205404_0.jpg?itok=HIcVHj4H"}
        imageTwo={"https://www.ancient-origins.net/sites/default/files/field/image/Polynesians-Really-Come-From.jpg"}
        imageThree={"https://www.aloha-hawaii.com/wp-content/uploads/2009/11/polynesian-cultural-center.jpg"}
        headerOne={'Golf Course'}
        headerTwo={'Tanitian History Museum'}
        headerThree={'Taniti Theater'}
      
        >
      </ThreeImages>
      <ThreeImages header={'Outdoor Adventures'}
        imageOne={"http://www.destination360.com/central-america/costa-rica/images/s/costa-rica-rainforest.jpg"}
        imageTwo={"https://www.costaricantrails.com/media/fotos/1575arenal9.jpg"}
        imageThree={"https://cdn.thecrazytourist.com/wp-content/uploads/2019/01/Maui-Dream-Helicopter-Flight.jpg"}
        headerOne={'Rainforest Hike'}
        headerTwo={'Volcano Tours'}
        headerThree={'Helicopter Rides'}
        linkText={"Book Now ->"}
        linkUrl={"https://www.tripadvisor.com/AttractionProductReview-g297566-d13857774-River_Tubing_Fiji-Lautoka_Viti_Levu.html"}
        >
      </ThreeImages>

    </Fragment>);

}

  // 