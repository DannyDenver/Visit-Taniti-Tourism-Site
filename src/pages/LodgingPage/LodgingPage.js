import React, { Fragment } from 'react';
import MainImage from '../../core/MainImage/MainImage';
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText'
import './LodgingPage.css';


export default function LodgingPage(props) {

  const lodgeTypes = {
    Luxury: "Luxury",
    BedandBreakfast: "BedandBreakfast",
    Hostel: "Hostel",
    FamilyHotels: "FamilyHotel"
  }

  const mainImageTextStyle = {
    top: '21%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    color: '#17AAB5',
    background: 'white',
    padding: '4px 30px',
    'border-radius': '10px'
  };

  let selectedType = lodgeTypes.BedandBreakfast;

  function setLodgingType(type) {
    console.log('setting '+ type);
    selectedType = type;
  }

  const lodges = [
    new Lodge("Four Seasons Luxury Resort", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37242591.webp?k=deb4d765a564823150f4758a47637a266cc0e43c35acd408a83527c05781e495&o=", null, lodgeTypes.Luxury),
    new Lodge("Boby's", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/37/c6/6e/breakfast-on-your-patio.jpg?w=400&h=300&s=1", null, lodgeTypes.BedandBreakfast),
    new Lodge("Orchid Tree Bed and Breakfast", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/30/41/belle-vue-kona-b-b.jpg?w=400&h=300&s=1", null, lodgeTypes.Luxury),
    new Lodge("Lilikoi Inn", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/f4/b9/photo1jpg.jpg?w=400&h=400&s=1", null, lodgeTypes.Luxury),
    new Lodge("Hale 'Ohu Bed & Breakfast", "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/9a/a1/f5/old-hawaiian.jpg?w=300&h=300&s=1", null, lodgeTypes.Luxury),
  ]
  

  return (
    <Fragment>
      <MainImage mainText={mainImageTextStyle} flipImage={true}
        imageSrc={"https://www.tahiti.com/images1/gallery/Vahine-Island-Beach-Bungalow-2000x1200_29886.jpg"} imageTitle={"Lodging"} />

      <div className="container mt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col col-8 text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" onClick={() => setLodgingType("All") } className={"btn btn-secondary " + (selectedType === 'All' ? "active" : null )}>All</button>
              <button type="button" onClick={() => setLodgingType(lodgeTypes.Hostel) } className={"btn btn-secondary " + (selectedType === lodgeTypes.Hostel ? "active" : null )}>Hostels</button>
              <button type="button" onClick={() => setLodgingType(lodgeTypes.Luxury) } className={"btn btn-secondary " + (selectedType === lodgeTypes.Luxury ? "active" : null )}>Four Star Hotel</button>
              <button type="button" onClick={() => setLodgingType(lodgeTypes.FamilyHotels) } className={"btn btn-secondary " + (selectedType === lodgeTypes.FamilyHotels ? "active" : null )}>Family Owned Hotels</button>
              <button type="button" onClick={() => setLodgingType(lodgeTypes.BedandBreakfast) } className={"btn btn-secondary " + (selectedType === lodgeTypes.BedandBreakfast ? "active" : null )}>Bed and Breakfasts</button>
            </div>

            <div> ** All lodging is regulated by the Tanitian government to meet high standards. **</div>
          </div>
        </div>
      </div>

      <div className="container">
        {
            lodges.map((lodge) => {
              return <LgImageWithText title={lodge.name} description={lodge.description} imageSrc={lodge.imageUrl}></LgImageWithText>
            })
        }
        </div>
    </Fragment>
  )
}



class Lodge {
  constructor(name, imageUrl, description, type) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.type = type;
  }
}