import React from 'react';
import ComicCardSmall from '../../general/ComicCardSmall';

export default function DayComicList (props) {
  const data = [
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "PIGPEN",
      views: "25M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "SELEBGRAM",
      views: "2.6M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "The Secret of Angel",
      views: "20.3M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "Ngopi, Yuk!",
      views: "1.2M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "Ghost Path",
      views: "23.6M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "PIGPEN",
      views: "25M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "SELEBGRAM",
      views: "2.6M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "The Secret of Angel",
      views: "20.3M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "Ngopi, Yuk!",
      views: "1.2M"
    },
    {
      img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
      title: "Ghost Path",
      views: "23.6M"
    }
  ]
  return <div className="bg-gray-200">
    <div className="mx-40 py-5 flex flex-wrap">
      {
        data.map(comic => {
          return <ComicCardSmall comic={comic} />
        })
      }
    </div>
  </div>
}