import React, { Fragment } from 'react';
import beachShot from '../../assets/beach.jpg'
import MainImage from '../../core/MainImage/MainImage'
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText';
import ThreeImages from '../../components/ThreeImages/ThreeImages';

export default function HomePage(props) {
  return (
    <Fragment>
      <MainImage flipImage={true} imageSrc={beachShot} imageTitle={"Welcome to Taniti!"} imageSubtitle={"Live on the Wild Side"} />
      <div className="container p-5 mb-3">
      <LgImageWithText
        title={"Island Wedding Venues"}
        imageSrc={"https://www.royal-hawaiian.com/wp-content/uploads/sites/16/2017/10/lux376mf-191808-royal-hawaiian-hotel-meetings-Coconut-Grove-Function-Med.jpg"}>
      </LgImageWithText>
      </div>

      <ThreeImages
        imageOne={"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ea/c1/f0.jpg"}
        imageTwo={"https://soniatasteshawaii.typepad.com/.a/6a00d83420a76e53ef01b7c7904262970b-800wi"}
        imageThree={"https://static.scientificamerican.com/blogs/cache/file/FF1F73FD-34F4-4F97-BC4FD37F675D4142_source.jpg?w=590&h=800&1F5E937F-6B46-4C71-9490891770F655F4"} >
      </ThreeImages>
    </Fragment>
  );
}
