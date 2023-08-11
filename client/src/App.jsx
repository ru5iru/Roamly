import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/navbar/navbar";
import RouteWithNavbar from "./RouteWithNavbar";
import HotelPage from "./pages/hotel/hotelpage";
import ShopPage from "./pages/shop/shoppage";
import AdvertisementPage from "./pages/advertisement/advertisementpage";
import Places from "./pages/places/places";
import TripType from "./pages/triptype/triptype";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import FirstView from "./pages/firstview/firstview";
import PlacesDetails from "./pages/places/placesdetails";
import AdvertisementDetails from "./components/advertisement/advertisementdetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Wrapper component with Navbar and route content */}
          <Route
            path="/"
            element={<RouteWithNavbar showNavbar={true} element={<Home />} />}
          />
          <Route
            path="/hotel"
            element={
              <RouteWithNavbar showNavbar={true} element={<HotelPage />} />
            }
          />
          <Route
            path="/advertisement"
            element={
              <RouteWithNavbar
                showNavbar={true}
                element={<AdvertisementPage />}
              />
            }
          />
          <Route
            path="/places"
            element={<RouteWithNavbar showNavbar={true} element={<Places />} />}
          />
          <Route
            path="/placedetails"
            element={
              <RouteWithNavbar showNavbar={true} element={<PlacesDetails />} />
            }
          />
          <Route
            path="/shop"
            element={
              <RouteWithNavbar showNavbar={true} element={<ShopPage />} />
            }
          />
          <Route
            path="/triptype"
            element={
              <RouteWithNavbar showNavbar={true} element={<TripType />} />
            }
          />
          <Route 
          path="/advertisement/:adId"
          element={
            <RouteWithNavbar showNavbar={true} element={<AdvertisementDetails />} />
          } />

          <Route
            path="/login"
            element={<RouteWithNavbar showNavbar={false} element={<Login />} />}
          />
          <Route
            path="/signup"
            element={
              <RouteWithNavbar showNavbar={false} element={<Signup />} />
            }
          />
          <Route
            path="/firstview"
            element={
              <RouteWithNavbar showNavbar={false} element={<FirstView />} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
