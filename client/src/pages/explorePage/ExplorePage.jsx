import "./explorepage.scss";
import LeftBar from "../../components/leftBar/LeftBar";
import LeftBarhs from "../../components/leftBar/LeftBar_hs";
import RightBar from "../../components/rightBar/RightBar";
import SearchBar from "../../components/exploreTopBar/SearchBar";
import ExploreTopBar from "../../components/exploreTopBar/ExploreTopBar";
import Explore from "../../components/explore/Explore";
import { useState } from "react";

const ExplorePage = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleActiveStepChange = (step) => {
        setActiveStep(step);
    };

   return (
      <div className="explorepage">
         <div className="leftbar-container-explore">
            <LeftBar />
         </div>
         <div className="main-container-explore">
            <LeftBarhs />
            <div>
                <SearchBar />
                <ExploreTopBar onActiveStepChange={handleActiveStepChange} activeStep={activeStep} />
                <Explore activeStep={activeStep} />
            </div>
         </div>
         <div className="rightbar-container-explore">
            <RightBar />
         </div>
      </div>
   );
};

export default ExplorePage;
