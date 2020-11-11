import React, { Component, Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage'
import ThreeImages from '../../components/ThreeImages/ThreeImages';

export default function CuisinePage(props) {
  const mainImageTextStyle = {
    top: '21%',
    color: '#11BBA7',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    padding: '4px 30px',
    borderRadius: '10px',
  };

  return (
    <Fragment>
      <MainImage mainText={mainImageTextStyle}
       imageSrc={"https://3cjpn44a10815cq8wfbykrdc-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Traditional-Polynesian-Food.jpg"}
       imageTitle={"Cuisine"} />

      <ThreeImages header={'Tanitian Polynesian Food'}
        subheader={'Fresh grilled fish and local produce'}
        imageOne={"https://www.yestahiti.com/_client_files/infos_voyageurs/chaud-froid.jpg"}
        imageTwo={"https://blog.assets.traveltrivia.com/2019/09/6-1-chameleonseye-istock.jpg"}
        imageThree={"https://blog.assets.traveltrivia.com/2019/09/6-2-Gerold-Grotelueschen-shutter.jpg"}
        headerOne={'Tuna Bar'}
        headerTwo={'La Dolce Tahini'}
        headerThree={'Royal Kiikiriri'}
      >
      </ThreeImages>
      <ThreeImages header={'American'}
        imageOne={"https://www.fsrmagazine.com/sites/default/files/styles/story_image_720x430/public/feature-images/teds.jpg?itok=6nb4AUR8"}
        imageTwo={"https://images.getbento.com/accounts/755e3018f0321ecda0d6d8342f55ad4e/media/images/33381pyzUSgihQuGKfJQTuuS4_Steubens_Burger.jpeg"}
        imageThree={"https://static.wixstatic.com/media/ccf584_0c07725170f644608f8790721c156f0c~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_2200,h_1104,al_t,q_90,usm_0.66_1.00_0.01/ccf584_0c07725170f644608f8790721c156f0c~mv2_d_3264_2448_s_4_2.webp"}
        headerOne={'Teds Montana Grill'}
        headerTwo={'Steubens'}
        headerThree={'Sassafrass Eatery'}

      >
      </ThreeImages>
      <ThreeImages header={'Pan-Asian'}
        imageOne={"https://media.timeout.com/images/101447733/1372/772/image.jpg"}
        imageTwo={"https://www.delhiplanet.com/wp-content/uploads/2019/07/cb40c6b4-webp.net-resizeimage-4.jpg"}
        imageThree={"https://img.grouponcdn.com/deal/80500f6d55964bc8bb9fc5090e04bc73/73/v1/c700x420.webp"}
        headerOne={'Bento Box'}
        headerTwo={'Banana Tree'}
        headerThree={"Kenny's Pan Asian Cuisine"}
      >
      </ThreeImages>
    </Fragment>
  )
}


//