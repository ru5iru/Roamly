import Login from "./pages/login/Login";
import NavBar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import LeftBarhs from "./components/leftBar/LeftBar_hs";
import RightBar from "./components/rightBar/RightBar";
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
import { useContext, useEffect, useState } from "react";
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
import TaxiPage from "./pages/taxi/taxipage";
import GuidePage from "./pages/guide/guidepage";
import Personalizingform from "./pages/personalizingForm/PersonalizingForm";
import LeftBarSp from "./components/leftBar/serviceProvider/leftBarSp";
import Header from "./components/header/Header";
import Forgotpwotp from "./pages/forgotPasswordOTP/fpotp";
import ForgotPW from "./pages/forgotPassword/fp";
import ResetPW from "./pages/resetPW/ResetPW";
import HeaderTravel from "./components/header/HeaderTravel";
import Verification from "./pages/signup/Verification";
import ExplorePage from "./pages/explorePage/ExplorePage";
import MarkInterests from "./pages/interests/MarkInterests";
import RatingsPage from "./pages/ratingsPage/RatingsPage";
import SignupSP from "./pages/signupSP/SignupSP";
import Chathome from "./pages/chat/chathome";
import { io } from "socket.io-client";


axios.defaults.baseURL = "http://localhost:8000/server/";
axios.defaults.withCredentials = true;
function App() {
    const { currentUser } = useContext(AuthContext);
    const [user, setUser] = useState("");

    const { darkMode } = useContext(DarkModeContext);

    const queryClient = new QueryClient();

    const [activeStep, setActiveStep] = useState(0);

    const handleActiveStepChange = (step) => {
        setActiveStep(step);
    };

    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io("http://localhost:5000"));
    }, []);

    useEffect(() => {
        socket?.emit("newUser", currentUser?.email);
    }, [socket, currentUser?.email]);



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

    const Messenger = () => {
        return (

            <div>
                <NavBar socket={socket} />
            
                <div>
                    <Chathome />
                </div>
                
            </div>
            
        );

    };

    const ProfilePage = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <div className={`theme-${darkMode ? "dark" : "light"}`}>
                    <NavBar socket={socket} />
                    <div
                        style={{
                            display: "flex",
                            position: "relative",
                            top: "4rem",
                            justifyContent: "center",
                        }}
                    >
                        <Profile socket={socket} />
                    </div>
                </div>
            </QueryClientProvider>
        );
    };

    const Feed = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <div className={`theme-${darkMode ? "dark" : "light"}`}>
                    <NavBar socket={socket} />
                    <Home />
                </div>
            </QueryClientProvider>
        );
    };

    const Exp = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <NavBar socket={socket} />
                <div className={`theme-${darkMode ? "dark" : "light"}`}>
                    <ExplorePage />
                </div>
            </QueryClientProvider>
        );
    };

    const MarkInterestsPage = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <NavBar socket={socket} />
                <div className={`theme-${darkMode ? "dark" : "light"}`}>
                    <MarkInterests />
                </div>
            </QueryClientProvider>
        );
    };

    const ReviewsPage = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <NavBar socket={socket} />
                <div className={`theme-${darkMode ? "dark" : "light"}`}>
                    <RatingsPage />
                </div>
            </QueryClientProvider>
        );
    };

    const Ads = () => {
        return (
            <div>
                <NavBar socket={socket} />
                <div style={{ display: "flex", position: "relative", top: "4rem" }}>
                    <LeftBarSp />
                    <div style={{ display: "flex", position: "relative", left: "298px" }}>
                        <LeftBarhs />
                        <AdvertisementPage />
                    </div>
                </div>
            </div>
        );
    };

    const Trip = () => {
        return (
            <div>
                <HeaderTravel />
                <Personalizingform />
            </div>
        );
    };

    const Place = () => {
        return (
            <div>
                <HeaderTravel />
                <Places />
            </div>
        );
    };

    const Placedetails = () => {
        return (
            <div>
                <HeaderTravel />
                <Placedetails />
            </div>
        );
    };
    const Shop = () => {
        return (
            <div>
                <HeaderTravel />
                <ShopPage />
            </div>
        );
    };

    const Hotel = () => {
        return (
            <div>
                <HeaderTravel />
                <HotelPage />
            </div>
        );
    };

    const Guide = () => {
        return (
            <div>
                <HeaderTravel />
                <GuidePage />
            </div>
        );
    };

    const Taxi = () => {
        return (
            <div>
                <HeaderTravel />
                <TaxiPage />
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
                {
                    path: "/verify/:token",
                    element: <Verification />,
                },
                {
                    path: "/signupsp",
                    element: <SignupSP />,
                },

                // {
                //     path: "/ratings/:id",
                //     element: <RatingsPage />,
                // }
            ],
        },
        {
            path: "/ratings/:id",
            element: (
                <ProtectedRoute>
                    <ReviewsPage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/markinterests",
            element: (
                <ProtectedRoute>
                    <MarkInterestsPage />
                </ProtectedRoute>
            ),
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
            element: (
                <ProtectedRoute>
                    <Feed />
                </ProtectedRoute>
            ),
        },
        {
            path: "/explore",
            element: (
                <ProtectedRoute>
                    <Exp />
                </ProtectedRoute>
            ),
        },
        {
            path: "/advertisements",
            element: (
                <ProtectedRoute>
                    <Ads />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip",
            element: (
                <ProtectedRoute>
                    <Trip />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip/place",
            element: (
                <ProtectedRoute>
                    <Place />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip/place/placedetails",
            element: (
                <ProtectedRoute>
                    <Placedetails />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip/place/placedetails/shops",
            element: (
                <ProtectedRoute>
                    <Shop />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip/place/placedetails/hotels",
            element: (
                <ProtectedRoute>
                    <Hotel />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip/place/placedetails/taxis",
            element: (
                <ProtectedRoute>
                    <Taxi />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trip/place/placedetails/guides",
            element: (
                <ProtectedRoute>
                    <Guide />
                </ProtectedRoute>
            ),
        },
        {
            path: "/chat",
            element: (
                <ProtectedRoute>
                    <Messenger />
                </ProtectedRoute>
            ),
        },

    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
