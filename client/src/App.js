import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import LeftBarhs from "./components/leftBar/LeftBar_hs";
import RightBar from "./components/rightBar/RightBar";
import Actions from "./components/actions/Actions";
import Posts from "./components/posts/Posts";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


function App() {

    const Layout = () => {
        return (
            <div className="layout">
                <Navbar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div>
                        <LeftBarhs />
                        <Actions />
                        <Posts />
                    </div>
                    <RightBar />
                </div>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/home",
                    element: <Home />,
                }


            ]
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
        }
    ]);

    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>)
};



export default App;
