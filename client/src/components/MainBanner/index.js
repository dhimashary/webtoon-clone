import React from "react";
import BannerBig from "./BannerBig";
import smallBanner1 from "./small-banner-1.png";
import smallBanner2 from "./small-banner-2.png";

export default function MainBanner (props) {

  return <div className="main-banner-wrapper hidden xl:block">
    <div className="main-banner-inner">
      <BannerBig></BannerBig>
      <div className="main-banner-small2">
        <img src={smallBanner1} alt="small-banner-top"/>
      </div>
      <div className="main-banner-small1">
        <img src={smallBanner2} alt="small-banner-bottom"/>
      </div>
    </div>
  </div>;
};