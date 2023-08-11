import React from 'react';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TripType from './pages/tripType/tripType';
import PlacesDetails from './pages/placesDetails/placesDetails';
import AdminPanel from './pages/adminPanel/adminPanel';
import Users from './pages/users/users';

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
    {
      path: "/users",
      element: <Users />,
    },
  ]);

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
