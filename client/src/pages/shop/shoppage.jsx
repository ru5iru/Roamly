import React from "react";
import "./shoppage.scss";
import Shop from "../../components/shop/shop";
import Advertisements from "../../components/advertisement/advertisement";

export const ShopPage = () => {
  return (
    <div className="outer-space">
      
      <div className="mid-page">
        <h1>Shops near Belihuloya</h1>
        <Shop />
        <Shop />
        <Shop />
      </div>
      
    </div>
  );
};

export default ShopPage;
