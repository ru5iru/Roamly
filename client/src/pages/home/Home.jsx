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


function Home({socket}) {

    const [openAddPost, setOpenAddPost] = useState(false);

    return (

        <div style={{ display: "flex", position: "relative", top: "4rem" }}>
            <LeftBar />
            <div style={{ position: "relative", left: "298px" }}>
                <LeftBarhs />
                <div style={{ marginLeft: 18 + 'px', marginTop: 18 + 'px' }}>
                    <Addpost setOpenAddPost={setOpenAddPost} />
                </div>
                <Feedcontent socket={socket}/>
                {/* <Home /> */}
            </div>
            <RightBar />
            {openAddPost && <PostForm setOpenAddPost={setOpenAddPost} />}
        </div>


    );
};


export default Home;