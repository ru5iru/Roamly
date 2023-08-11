// import Login from "./pages/login/Login";
import NavBar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import LeftBarhs from "./components/leftBar/LeftBar_hs";
import RightBar from "./components/rightBar/RightBar";
import Explore from "./components/explore/Explore";
import ExploreBar from "./components/exploreBar/ExploreBar";
import ExploreTopBar from "./components/exploreTopBar/ExploreTopBar";
import Home from "./pages/home/Home";
// import Posts from "./components/post/Posts";
import Profile from "./pages/profile/Profile";
// import Signup from "./pages/signup/Signup";
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
                    <NavBar />
                    <div >
                        <div >
                            <Outlet />
                        </div>
                    </div>
                </div>
            </QueryClientProvider>
        );
    };

    const Home = () => {
        return (
            <div className="layout">
                <NavBar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div>
                        <LeftBarhs />
                        <Home />
                    </div>
                    <RightBar />
                </div>
            </div>
        );
    };

    const Exp = () => {
        return (
            <div>
                <Navbar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div>
                        <LeftBarhs />
                        <ExploreTopBar />
                        <Explore />
                        {/* <Posts /> */}

                    </div>
                </div>

            </div>
        )
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
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile/:id",
                    element: <Profile />,
                },
            ],
        },
        // {
        //     path: "/login",
        //     element: <Login />,
        // },
        // {
        //     path: "/signup",
        //     element: <Signup />,
        // },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/explore",
            element: <Exp />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
