import React, { useEffect, useState } from 'react';
import BigBanner1 from "./Bigbanner_PC_1.png";
import BigBanner2 from "./Bigbanner_PC_2.png";
import BigBanner3 from "./Bigbanner_PC_3.png";
import BigBanner4 from "./Bigbanner_PC_4.png";
import BigBanner5 from "./Bigbanner_PC_5.png";
import BigBanner6 from "./Bigbanner_PC_6.png";

export default function BannerBig (props) {
  let [imageIndex, setImageIndex] = useState(0);
  const images = [BigBanner1, BigBanner2, BigBanner3, BigBanner4, BigBanner5, BigBanner6];
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setImageIndex(i)
      if(i === 5) {
        i = 0
      } else {
        i++
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full">
      <span className="h-full w-auto absolute">
        <img src={images[imageIndex]}
        className="elementToFadeInAndOut hidden" alt="banner-big"/>
      </span>
    </div>
  )
};