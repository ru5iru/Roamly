import React from "react";
import "./shoppage.scss";
import Shop from "../../components/shop/shop";
import Advertisements from "../../components/advertisement/advertisement";

export const ShopPage = () => {
  return (
    <div className="outer-space">
      <div className="outer-left">
        <Advertisements />
        <Advertisements />
        <Advertisements />
      </div>
      <div className="mid">
        <h1>Hotels near Belihuloya</h1>
        <Shop />
        <Shop />
        <Shop />
      </div>
      <div className="outer-right">
        <Advertisements />
        <Advertisements />
        <Advertisements />
      </div>
    </div>
  );
};

export default ShopPage;
