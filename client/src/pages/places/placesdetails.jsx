// import "./placesdetails.scss";
// import Banner from "../../components/banner/banner";
// import Information from "../../components/information/information";
// import Accommodation from "../../components/accommodation/accommodation";
// import LimitedAdvertisements from "../../components/advertisement/limitedadv";

// const PlacesDetails = () => {
//   return (
    
//       <div className="mid-page">
//         <Banner />
//         <Information />
//         <Accommodation />
//       </div>
      
//   );
// };

// export default PlacesDetails;


// PlaceDetails.js

import React, { useEffect, useState } from "react";

function PlacesDetails({ match }) {
  const [placeDetails, setPlaceDetails] = useState({});
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    // Fetch place details when the component mounts
    const placeId = match.params.placeId; // Assuming you're passing the place_id as a URL parameter

    // Make a request to the Google Places API to get place details
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,photos&key=AIzaSyBhY-F4UuZzLWdgxdFRtsU1kyjJBLB63s8`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setPlaceDetails(data.result);
          if (data.result.photos && data.result.photos.length > 0) {
            const photoReference = data.result.photos[0].photo_reference;
            setPhotoUrl(
              `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBhY-F4UuZzLWdgxdFRtsU1kyjJBLB63s8`
            );
          }
        }
      });
  }, [match.params.placeId]);

  return (
    <div>
      <h2>Place Details</h2>
      <h3>{placeDetails.name}</h3>
      {photoUrl && <img src={photoUrl} alt="Selected Place" />}
      {/* Display other place details here */}
    </div>
  );
}

export default PlacesDetails;
