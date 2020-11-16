import React, { Fragment, useState } from 'react';
import MainImage from '../../core/MainImage/MainImage';
import LgImageWithText from '../../components/LgImageWithText/LgImageWithText'
import './LodgingPage.css';
import Lodge from '../../models/Lodge'

const lodgeTypes = {
  Luxury: "Luxury",
  BedandBreakfast: "Bed and Breakfast",
  Hostel: "Hostel",
  FamilyHotels: "Family Hotel"
};

export default function LodgingPage(props) {
  const [selectedType, setType] = useState('All');

  const lodges = [
    new Lodge("Four Seasons Luxury Resort", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37242591.webp?k=deb4d765a564823150f4758a47637a266cc0e43c35acd408a83527c05781e495&o=", null, lodgeTypes.Luxury),

    new Lodge("Boby's", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/37/c6/6e/breakfast-on-your-patio.jpg?w=400&h=300&s=1", null, lodgeTypes.BedandBreakfast),
    new Lodge("Orchid Tree Bed and Breakfast", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/30/41/belle-vue-kona-b-b.jpg?w=400&h=300&s=1", null, lodgeTypes.BedandBreakfast),
    new Lodge("Lilikoi Inn", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/f4/b9/photo1jpg.jpg?w=400&h=400&s=1", null, lodgeTypes.BedandBreakfast),
    new Lodge("Hale 'Ohu Bed & Breakfast", "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/9a/a1/f5/old-hawaiian.jpg?w=300&h=300&s=1", null, lodgeTypes.BedandBreakfast),

    new Lodge("Bamboo Travelers", "https://pix.easytahiti.com/hotels/FARE-MAEVA-HUAHINE-BNB-12.webp", null, lodgeTypes.Hostel),
    new Lodge("Gecko's Resort", "https://pix.easytahiti.com/hotels/FARE-MAEVA-HUAHINE-BNB-09.webp", null, lodgeTypes.Hostel),
    new Lodge("Horizon Backpackers & Travel Centre", "https://pix.easytahiti.com/hotels/FARE-MAEVA-HUAHINE-BNB-06.webp", null, lodgeTypes.Hostel),

    new Lodge("Manu's", "https://pix.easytahiti.com/hotels/CHEZ-NONO-BNB-BORA-BORA-02.webp", null, lodgeTypes.FamilyHotels),
    new Lodge("Chez Nono", "https://pix.easytahiti.com/hotels/PENSION-FARE-AUTE-MOOREA-BNB-POLYNESIE-005.webp", null, lodgeTypes.FamilyHotels),
    new Lodge("Fare Aute", "https://pix.easytahiti.com/hotels/FARE-MAEVA-HUAHINE-BNB-23.webp", null, lodgeTypes.FamilyHotels),
    new Lodge("Fare Maeve", "https://pix.easytahiti.com/hotels/FARE-MAEVA-HUAHINE-BNB-04.webp", null, lodgeTypes.FamilyHotels)

  ];

  const mainImageTextStyle = {
    top: '21%',
    left: '73%',
    transform: 'translate(-50%, -50%)',
    color: '#17AAB5',
    background: 'white',
    padding: '4px 30px',
    'border-radius': '10px'
  };

  return (
    <Fragment>
      <MainImage mainText={mainImageTextStyle} flipImage={true}
        imageSrc={"https://www.tahiti.com/images1/gallery/Vahine-Island-Beach-Bungalow-2000x1200_29886.jpg"} imageTitle={"Lodging"} />

      <div className="container mt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col col-8 text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" onClick={() => setType("All")} className={"btn btn-secondary " + (selectedType === 'All' ? "active" : null)}>All</button>
              <button type="button" onClick={() => setType(lodgeTypes.Luxury)} className={"btn btn-secondary " + (selectedType === lodgeTypes.Luxury ? "active" : null)}>Four Star Hotel</button>
              <button type="button" onClick={() => setType(lodgeTypes.Hostel)} className={"btn btn-secondary " + (selectedType === lodgeTypes.Hostel ? "active" : null)}>Hostels</button>
              <button type="button" onClick={() => setType(lodgeTypes.FamilyHotels)} className={"btn btn-secondary " + (selectedType === lodgeTypes.FamilyHotels ? "active" : null)}>Family Owned Hotels</button>
              <button type="button" onClick={() => setType(lodgeTypes.BedandBreakfast)} className={"btn btn-secondary " + (selectedType === lodgeTypes.BedandBreakfast ? "active" : null)}>Bed and Breakfasts</button>
            </div>

            <div> ** All lodging is regulated by the Tanitian government to meet high standards. **</div>
          </div>
        </div>
      </div>

      <div className="container">
        {
          lodges.filter(lodge => (lodge.type === selectedType || selectedType === 'All')).map((lodge) => {
            return <LgImageWithText title={lodge.name} subTitle={lodge.type} description={lodge.description} imageSrc={lodge.imageUrl} linkText={ "Book Now ->"}></LgImageWithText>
          })
        }
      </div>
    </Fragment>
  )
}
