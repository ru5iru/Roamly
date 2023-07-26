/* The following line can be included in your src/index.js or App.js file */
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import Placesdetails from "./pages/places/placesdetails";
// import CollapsibleExample from "./components/collapsible/collapsible";
import HotelPage from './pages/hotel/hotelpage';
import ShopPage from './pages/shop/shoppage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Placesdetails />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
