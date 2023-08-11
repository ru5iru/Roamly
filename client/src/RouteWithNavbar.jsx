import React from "react";
import Navbar from "./components/navbar/navbar";

const RouteWithNavbar = ({ showNavbar, element }) => (
  <div>
    {showNavbar && <Navbar />}
    {element}
  </div>
);

export default RouteWithNavbar;
