import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';
import TwoImages from '../../components/TwoImages/TwoImages';
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText';
import ThreeImages from '../../components/ThreeImages/ThreeImages';

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
      <MainImage
        mainText={mainImageTextStyle}
        flipImage={true}
        imageSrc={"https://aruba.bynder.com/m/50d860e03c94f2b8/desktop_letterbox_retina-Family-Biking-on-the-Linear-Park.jpg"} imageTitle={"Transportation"} />

      <TwoImages
        header={'Arrival'}
        imageOne={"https://www.anywhere.com/img-a/destination/sjo-airport-alajuela-costa-rica/3-016.JPG/-/h=300&q=50"}
        imageTwo={"https://3h1v901r1l3q1atu5u3fomnk-wpengine.netdna-ssl.com/wp-content/uploads/2013/05/tahiti-7506421.jpg"}
        headerOne={'Taniti Airport'}
        headerTwo={'Port Yellow Leaf Bay'}>
      </TwoImages>



      <div className="container p-5 mb-3">
        <div className="col m-4 col-12 text-center">
          <h1>Around the Island</h1>
        </div>
        <LgImageWithText
          groupTitle={"Around the Island"}
          title={"Public Bus System"}
          imageSrc={"https://xdaysiny.com/wp-content/uploads/2016/05/Public-bus-transportaion-Moorea-French-Polynesia-600x400.jpg"}>
        </LgImageWithText>
        <LgImageWithText
          title={"Rental Car"}
          imageSrc={"https://www.govisitcostarica.com/images/uploads/detail/optimized/g-alamo-portada1(1).jpg"}>
        </LgImageWithText>
        <LgImageWithText
          title={"Walking Paths"}
          imageSrc={"https://www.wanderingitaly.com/a/cinque-terre-trails.png"}>
        </LgImageWithText>

        <ThreeImages
          header={"Bike Rental"}
          imageOne={"https://www.flashpackingamerica.com/wp-content/uploads/2019/09/bike-sharing-in-kona-bike-stations-big-island-.jpeg"}
          imageTwo={"https://www.annamaria.com/wp-content/uploads/2018/12/AMI_Adventure_Rentals__30_lg.jpg"}
          imageThree={"https://www.turtlebayresort.com/sites/default/files/LP_Kawela-Cruise_593x380.jpg"} 
          headerOne={'Public Cycle Rental'}
          headerTwo={"Moana's Bikes"}
          headerThree={"Kip's Bikes"}
          linkText={"Reserve a Bike Now ->"}

          >
        </ThreeImages>
      </div>
    </Fragment >
  )
}

