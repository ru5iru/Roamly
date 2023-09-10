import "./home.scss"
import NavBar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import LeftBarhs from "../../components/leftBar/LeftBar_hs";
import RightBar from "../../components/rightBar/RightBar";
import Explore from "../../components/explore/Explore";
import ExploreBar from "../../components/exploreBar/ExploreBar";
import ExploreTopBar from "../../components/exploreTopBar/ExploreTopBar";
import Feedcontent from "../../components/feed/feed";
import Addpost from "../../components/postComponents/addpost/Addpost";
import PostForm from "../../components/postComponents/addpost/PostForm";
import { useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function Home() {

    const [openAddPost, setOpenAddPost] = useState(false);

    return (
        <div className="home">
            <LeftBar />
            <div className="main-container-home">
                <LeftBarhs />
                <div className="addPostContainer-home">
                    <Addpost setOpenAddPost={setOpenAddPost} />
                </div>
                <Feedcontent />
            </div>
            <RightBar />
            {openAddPost && <PostForm setOpenAddPost={setOpenAddPost} />}
        </div>


    );
};


export default Home;