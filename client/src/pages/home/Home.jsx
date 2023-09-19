import "./home.scss"
import LeftBar from "../../components/leftBar/LeftBar";
import LeftBarhs from "../../components/leftBar/LeftBar_hs";
import RightBar from "../../components/rightBar/RightBar";
import Feedcontent from "../../components/feed/feed";
import Addpost from "../../components/postComponents/addpost/Addpost";
import PostForm from "../../components/postComponents/addpost/PostForm";
import { useState } from "react";


function Home() {

    const [openAddPost, setOpenAddPost] = useState(false);

    return (
        <div className="home">
            <div className="leftbar-container-home">
                <LeftBar />
            </div>
            <div className="main-container-home">
                <LeftBarhs />
                <div className="addPostContainer-home">
                    <Addpost setOpenAddPost={setOpenAddPost} />
                </div>
                <Feedcontent />
            </div>
            <div className="rightbar-container-home">
                <RightBar />
            </div>
            {openAddPost && <PostForm setOpenAddPost={setOpenAddPost} />}
        </div>
    );
};


export default Home;