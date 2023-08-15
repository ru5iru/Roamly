import React from 'react';
import './guide.scss';


function TravelGuide(props) {
  const { photo, name, languages, telephone, isTopGuide } = props;

  return (
    <div className={`travel-guide-card ${isTopGuide ? 'top-guide' : ''}`}>

      <div className="left-section">
        <img src={photo} alt={name} className="travel-guide-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            <span>Languages : </span>
            {/* <img src='https://img.icons8.com/ios7/600w/228BE6/language.png'alt="language icon" className="icon" /> */}
            <span className="languages">{languages}</span>
          </p>
          <p>
            <img src='https://www.freeiconspng.com/uploads/phone-png-3.png' alt="phone icon" className="icon" />
            <span className="telephone">{telephone}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Guides() {
  const travelGuides = [
    {
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      name: 'John Doe',
      languages: 'English, Sinhala',
      telephone: '1234567890',
    //   isTopGuide: true,
    },
    {
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      name: 'Jane Smith',
      languages: 'English, French',
      telephone: '9876543210',
    //   isTopGuide: true,
    },
    {
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      name: 'John Doe',
      languages: 'English, German',
      telephone: '4567890123',
    //   isTopGuide: true,
    },
    {
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      name: 'Emily Davis',
      languages: 'English, Spanish',
      telephone: '7890123456',
    //   isTopGuide: false,
    },
    {
        photo: 'https://qph.cf2.quoracdn.net/main-qimg-339a6d47c397c4691980ac0fef9ad08e-lq',
        name: 'John Doe',
        languages: 'English, Sinhala',
        telephone: '1234567890',
        // isTopGuide: false,
      },
      {
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Jane Smith',
        languages: 'English, French',
        telephone: '9876543210',
        // isTopGuide:false,
      },
      {
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Jane Smith',
        languages: 'English, German',
        telephone: '4567890123',
        // isTopGuide: false,
      },
      {
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' ,
        name: 'Emily Davis',
        languages: 'English, Spanish',
        telephone: '7890123456',
        // isTopGuide: false,
      },
  ];

  return (
    <div>
         <h1>Travel Guides</h1>
      {/* <h1 className="page-title">Travel Guides in Belihuloya</h1> */}
      <div className="guide-container">
     
        {travelGuides.map((guide, index) => (
          <TravelGuide
            key={index}
            photo={guide.photo}
            name={guide.name}
            languages={guide.languages}
            telephone={guide.telephone}
            isTopGuide={guide.isTopGuide}
          />
        ))}
      </div>
    </div>
  );
}

export default Guides;
