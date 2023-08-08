import React, { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import LeftBarhs from "./components/leftBar/LeftBar_hs";
import RightBar from "./components/rightBar/RightBar";
import Actions from "./components/actions/Actions";
import Posts from "./components/posts/Posts";
import Explore from "./components/explore/Explore";
import ExploreBar from "./components/exploreBar/ExploreBar";
import ExploreTopBar from "./components/exploreTopBar/ExploreTopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Exp from "./components/explore/Explore";
import CreatePost from "./components/createPost/createPost";
import ClosePost from "./components//closePost/closePost";
import PostDone from "./components/postDone/postDone";
import PostFail from "./components/postFail/postFail";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
    const [isExploreBarVisible, setIsExploreBarVisible] = useState(false);
    console.log(isExploreBarVisible);
    // console.log(setIsExploreBarVisible);

    const toggleExploreBarVisibility = () => {
        setIsExploreBarVisible(!isExploreBarVisible);
        console.log("isExploreBarVisible");
    };

    const [isPostDiscardVisible, setIsPostDiscardVisible] = useState(false);
    // console.log(isPostDiscardVisible);

    const togglePostDiscardVisibility = () => {
        setIsPostDiscardVisible(!isPostDiscardVisible);
        console.log("isPostDiscardVisible");
    };

    const [isPostDoneVisible, setIsPostDoneVisible] = useState(false);
    // console.log(isPostDoneVisible);

    const togglePostDoneVisibility = () => {
        setIsPostDoneVisible(!isPostDoneVisible);
        console.log("isPostDoneVisible");
    };

    const [isPostFailVisible, setIsPostFailVisible] = useState(false);

    const togglePostFailVisibility = () => {
        setIsPostFailVisible(!isPostFailVisible);
        console.log("isPostFailVisible");
    };


    const Layout = () => {
        return (
            <div className="layout">
                <Navbar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div>
                        <LeftBarhs />
                        <Actions toggleExploreBarVisibility={toggleExploreBarVisibility} />
                        <Posts />
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
                        {/* <Explore /> */}
                        <Posts />

                    </div>
                </div>

            </div>
        )
    };


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
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/explore",
            element: <Exp />,
        },
    ]);

    return (
        <div className="app">
            {isExploreBarVisible && <CreatePost toggleExploreBarVisibility={toggleExploreBarVisibility} togglePostDiscardVisibility={togglePostDiscardVisibility} togglePostDoneVisibility={togglePostDoneVisibility} togglePostFailVisibility={togglePostFailVisibility} />}
            {isPostDiscardVisible && <ClosePost togglePostDiscardVisibility={togglePostDiscardVisibility} toggleExploreBarVisibility={toggleExploreBarVisibility} />}
            {isPostDoneVisible && <PostDone togglePostDoneVisibility={togglePostDoneVisibility} />}
            {isPostFailVisible && <PostFail togglePostFailVisibility={togglePostFailVisibility} toggleExploreBarVisibility={toggleExploreBarVisibility} />}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
