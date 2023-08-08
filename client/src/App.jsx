/* The following line can be included in your src/index.js or App.js file */
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import Placesdetails from "./pages/places/placesdetails";
// import CollapsibleExample from "./components/collapsible/collapsible";
import HotelPage from './pages/hotel/hotelpage';
import ShopPage from './pages/shop/shoppage';
import AdvertisementPage from "./pages/advertisement/advertisementpage";
// import AdvertisementItem from "./components/advertisement/advertisementitem";
import Places from "./pages/places/places";
import TripType from "./pages/triptype/triptype";
import Home from "./pages/home/home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <AdvertisementItem /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/advertisement" element={<AdvertisementPage />} />
          <Route path="/trip" element={<TripType />} />
          <Route path="/places" element={<Places />} />
          <Route path="/placedetails" element={<Placesdetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;