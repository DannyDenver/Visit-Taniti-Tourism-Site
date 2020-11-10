import React, { Fragment } from 'react';
import beachShot from '../../assets/beach.jpg'
import MainImage from '../../core/MainImage/MainImage'
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText';
import ThreeImages from '../../components/ThreeImages/ThreeImages';

export default function HomePage(props) {
    return (
      <Fragment>
            <MainImage imageSrc={beachShot} imageTitle={"Welcome to Taniti!"} imageSubtitle={"Live on the Wild Side"} />
      <LgImageWithText title={"Tanitian Dance Party Event"} imageSrc={"https://www.gannett-cdn.com/presto/2020/03/07/PPHX/7068bdba-c401-4f8d-b4a2-d98db8b8b9ff-Tamalii_Polynesian_Entertainment_5.jpg?width=2560"}></LgImageWithText>
      
      <ThreeImages 
      imageOne={"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ea/c1/f0.jpg"}
      imageTwo={"https://soniatasteshawaii.typepad.com/.a/6a00d83420a76e53ef01b7c7904262970b-800wi"}
      imageThree={"https://static.scientificamerican.com/blogs/cache/file/FF1F73FD-34F4-4F97-BC4FD37F675D4142_source.jpg?w=590&h=800&1F5E937F-6B46-4C71-9490891770F655F4"}
      >
      </ThreeImages>
        </Fragment>
    );
  }
