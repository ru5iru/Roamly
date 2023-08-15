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
import UserProfile from './pages/userProfile/userProfile';
import AddAdmin from './pages/addAdmin/addAdmin';
import AdvertisementsPage from './pages/AdvertisementsPage/advertisementsPage';
import ReportsPage from './pages/reportsPage/reportsPage';
import PlacesPage from './pages/placesPage/placesPage';
import BadgesPage from './pages/badgesPage/badgesPage';
import ProfilePage from './pages/profilePage/profilePage';
import AdViewPage from './pages/adViewPage/adViewPage';

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
    {
      path: "/userprofile",
      element: <UserProfile />,
    },
    {
      path: "/addadmin",
      element: <AddAdmin />,
    },
    {
      path: "/advertisementspage",
      element: <AdvertisementsPage />,
    },
    {
      path: "/reportspage",
      element: <ReportsPage />,
    },
    {
      path: "/placespage",
      element: <PlacesPage />,
    },
    {
      path: "/badgespage",
      element: <BadgesPage />,
    },
    {
      path: "/profilepage",
      element: <ProfilePage />,
    },
    {
      path: "/adviewpage",
      element: <AdViewPage />,
    },
  ]);

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
