import React from 'react';
import TaxiCard from './TaxiCard'; // Import the corrected component name

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
        <h1 className="app-name">Roamly</h1>
        </div>
      </nav>
      <h1>Taxi Services</h1>
      <div className="card-container">
        <TaxiCard
          photo="https://packtolife.com/wp-content/uploads/2017/07/featured-image-how-rent-tuktuk-sri-lanka.jpg"
          name="Prasad's Tuktuk"
          owner="Prasad Jaysinghe"
          type="Tuktuk"
          mobile="0775674567"
          passengers={3}
        />
        <TaxiCard
          photo="https://s3-media0.fl.yelpcdn.com/bphoto/CfZH4WpCXaH-JYLxqk-Akw/258s.jpg"
          name="Lanka Cabs"
          owner="Lanka Cabs Pvt. Ltd."
          type="Car"
          mobile="0712345678"
          passengers={4}
        />
      </div>
    </div>
  );
}

export default App;
