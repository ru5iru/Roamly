import React from 'react';
import './guide.scss';


function TravelGuide(props) {
  const { photo, name, languages, telephone, isTopGuide, description  } = props;

  return (
    <div className={`travel-guide-card ${isTopGuide ? 'top-guide' : ''}`}>
      {isTopGuide && (
        <div className="crown-container">
          {/* <img src='https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vip-golden-crown-icon-member-golden-crown-champion-first-ranking-exclusive-image_2291844.jpg' alt="crown icon" className="crown-icon" /> */}
        </div>
      )}
      <div className="left-section">
        <img src={photo} alt={name} className="travel-guide-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            <img src='https://img.icons8.com/ios7/600w/228BE6/language.png'alt="language icon" className="icon" />
            <span className="languages">{languages}</span>
          </p>
          <p>
            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQITEJyULCnxeDmNeNixKaqdR4inGBs1X82t0CQZP6SZG98nNbN' alt="phone icon" className="icon" />
            <span className="telephone">{telephone}</span>
          </p>
          <p><span className='description'>
            {description}
          </span>
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
      isTopGuide: true,
      description: 'Enthusiastic local guide ready to show you the best of our vibrant culture and cuisine.',
    },
    {
      photo: 'https://qph.cf2.quoracdn.net/main-qimg-339a6d47c397c4691980ac0fef9ad08e-lq',
      name: 'Jane Smith',
      languages: 'English, French',
      telephone: '9876543210',
      isTopGuide: true,
      description: 'Experienced guide with a passion for adventure and culture.',
    },
    {
      photo: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
      name: 'David Johnson',
      languages: 'English, German',
      telephone: '4567890123',
      isTopGuide: true,
      description: 'History and art enthusiast excited to share the stories behind our landmarks.',
    },
    {
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      name: 'Emily Davis',
      languages: 'English, Spanish',
      telephone: '7890123456',
      isTopGuide: false,
      description: 'A local foodie and history buff eager to help you discover hidden gems and cultural treasures.',
    },
    {
        photo: 'https://qph.cf2.quoracdn.net/main-qimg-339a6d47c397c4691980ac0fef9ad08e-lq',
        name: 'John Doe',
        languages: 'English, Sinhala',
        telephone: '1234567890',
        isTopGuide: false,
        description: 'Your gateway to authentic experiences, from local markets to traditional festivals.',
      },
      {
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Jane Smith',
        languages: 'English, French',
        telephone: '9876543210',
        isTopGuide:false,
        description: 'Passionate storyteller, ready to unveil the history and legends of our region.',
      },
      {
        photo: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        name: 'David Johnson',
        languages: 'English, German',
        telephone: '4567890123',
        isTopGuide: false,
        description: 'Embark on unique adventures and create memories that will last a lifetime.',
      },
      {
        photo: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        name: 'Emily Davis',
        languages: 'English, Spanish',
        telephone: '7890123456',
        isTopGuide: false,
        description: 'Join me for an unforgettable journey through culture, history, and natural wonders.',
      },
  ];

  return (
    <div>
      <div className="guide-container">
        {travelGuides.map((guide, index) => (
          <TravelGuide
            key={index}
            photo={guide.photo}
            name={guide.name}
            languages={guide.languages}
            telephone={guide.telephone}
            isTopGuide={guide.isTopGuide}
            description={guide.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Guides;
