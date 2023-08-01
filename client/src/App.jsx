import React from 'react';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TripType from './pages/tripType/tripType';
import PlacesDetails from './pages/placesDetails/placesDetails';
import AdminPanel from './pages/adminPanel/adminPanel';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminPanel />,
    },
    {
      path: "/placesdetails",
      element: <PlacesDetails />,
    },
    {
      path: "/triptype",
      element: <TripType />,
    },
  ]);

  return(
    <div>
      <RouterProvider router={router} />
    </div>
    /*<div>
      <PlacesDetails />
    </div>*/
    /*<div>
      <AdminPanel />
    </div>*/
  );
}

export default App;
