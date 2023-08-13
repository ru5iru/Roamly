import Login from "./pages/login/Login";
import NavBar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import LeftBarhs from "./components/leftBar/LeftBar_hs";
import RightBar from "./components/rightBar/RightBar";
import Explore from "./components/explore/Explore";
import ExploreBar from "./components/exploreBar/ExploreBar";
import ExploreTopBar from "./components/exploreTopBar/ExploreTopBar";
import Feedcontent from "./components/feed/feed";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import "./style.scss";
import {
   createBrowserRouter,
   RouterProvider,
   Outlet,
   Navigate,
} from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FirstView from "./pages/firstView/FirstView";
import AdvertisementPage from "./pages/advertisement/advertisementpage";
import Places from "./pages/places/places";
import PlacesDetails from "./pages/places/placesdetails";
import ShopPage from "./pages/shop/shoppage";
import HotelPage from "./pages/hotel/hotelpage";
import Header from "./components/header/Header";
import Forgotpwotp from "./pages/forgotPasswordOTP/fpotp";
import ForgotPW from "./pages/forgotPassword/fp";
import ResetPW from "./pages/resetPW/ResetPW";
// import Interests from "./pages/Interests/Interests";

axios.defaults.baseURL = "http://localhost:8000/server/";
axios.defaults.withCredentials = true;
function App() {
   const { currentUser } = useContext(AuthContext);

   const { darkMode } = useContext(DarkModeContext);

   const queryClient = new QueryClient();

   const Layout = () => {
      return (
         <QueryClientProvider client={queryClient}>
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
               <Header />
               <div>
                  <Outlet />
               </div>
            </div>
         </QueryClientProvider>
      );
   };

   const ProfilePage = () => {
      return (
         <QueryClientProvider client={queryClient}>
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
               <NavBar />
               <div
                  style={{
                     display: "flex",
                     position: "relative",
                     top: "4rem",
                     justifyContent: "center",
                  }}
               >
                  <Profile />
               </div>
            </div>
         </QueryClientProvider>
      );
   };

   const Feed = () => {
      return (
         <QueryClientProvider client={queryClient}>
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
               <NavBar />
               <div
                  style={{ display: "flex", position: "relative", top: "4rem" }}
               >
                  <LeftBar />
                  <div>
                     <LeftBarhs />
                     <Feedcontent />
                  </div>
                  <RightBar />
               </div>
            </div>
         </QueryClientProvider>
      );
   };

   const Exp = () => {
      return (
         <QueryClientProvider client={queryClient}>
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
               <NavBar />
               <div
                  style={{ display: "flex", position: "relative", top: "4rem" }}
               >
                  <LeftBar />
                  <div>
                     <LeftBarhs />
                     <ExploreTopBar />
                     <div style={{ display: "flex" }}>
                        <Explore />
                        <RightBar />
                     </div>
                  </div>
               </div>
            </div>
         </QueryClientProvider>
      );
   };

   const Ads = () => {
      return (
         <div>
            <NavBar />
            <div style={{ display: "flex", position: "relative", top: "4rem" }}>
               <LeftBar />
               <div>
                  <LeftBarhs />
                  <AdvertisementPage />
               </div>
               <RightBar />
            </div>
         </div>
      );
   };

   const Trip = () => {
      return (
         <div>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <LeftBar />
               <div>
                  <LeftBarhs />
               </div>
               <RightBar />
            </div>
         </div>
      );
   };

   const Place = () => {
      return (
         <div>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <LeftBar />
               <div>
                  <LeftBarhs />
                  <Places />
               </div>
               <RightBar />
            </div>
         </div>
      );
   };

   const Placedetails = () => {
      return (
         <div>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <LeftBar />
               <div>
                  <LeftBarhs />
                  <PlacesDetails />
               </div>
               <RightBar />
            </div>
         </div>
      );
   };
   const Shop = () => {
      return (
         <div>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <LeftBar />
               <div>
                  <LeftBarhs />
                  <ShopPage />
               </div>
               <RightBar />
            </div>
         </div>
      );
   };

   const Hotel = () => {
      return (
         <div>
            <NavBar />
            <div style={{ display: "flex", position: "relative", top: "4rem", justifyContent: "space-between" }}>
               <LeftBar />
               <div>
                  <LeftBarhs />
                  <HotelPage />
               </div>
               <RightBar />
            </div>
         </div>
      );
   };

   const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
         return <Navigate to="/login" />;
      }

      return children;
   };

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <FirstView />,
            },
            {
               path: "/login",
               element: <Login />,
            },
            {
               path: "/signup",
               element: <Signup />,
            },
            {
               path: "/forgotPw",
               element: <ForgotPW />,
            },
            {
               path: "/forgotpwotp",
               element: <Forgotpwotp />,
            },
            {
               path: "/resetpw",
               element: <ResetPW />,
            },
            // {
            //     path: "/interets",
            //     element: <Interests />,
            // },
         ],
      },
      {
         path: "/profile/:id",
         element: (
            <ProtectedRoute>
               <ProfilePage />
            </ProtectedRoute>
         ),
      },
      {
         path: "/feed",
         element: <Feed />,
      },
      {
         path: "/explore",
         element: <Exp />,
      },
      {
         path: "/advertisements",
         element: <Ads />,
      },
      {
         path: "/trip",
         element: <Trip />,
      },
      {
         path: "/trip/place",
         element: <Place />,
      },
      {
         path: "/trip/place/placedetails",
         element: <Placedetails />,
      },
      {
         path: "/trip/place/placedetails/shops",
         element: <Shop />,
      },
      {
         path: "/trip/place/placedetails/hotels",
         element: <Hotel />,
      },
   ]);

   return (
      <div>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
