import React from 'react';
import GenreComicRow from './components/GenreComicRow';

export default function GenreComics() {
  const data = {
    "KOMEDI": {
      "desc": "bersiaplah terhibur dan tertawa",
      "comics": [ {
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
      },{
        img: "https://webtoon-phinf.pstatic.net/20191004_38/157018073432311PEW_PNG/thumb_ipad_510x510_0.png?type=a210",
        title: "The Secret of Angel",
        views: "20.3M"
      },]
    },
    "HORROR": {
      "desc": "apakah kamu suka yang menyeramkan ?",
      "comics": [ {
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
        title: "The Secret of Angel",
        views: "20.3M"
      },]
    }
  }
  const renderedGenreRows = []

  for(let key in data) {
    renderedGenreRows.push(<GenreComicRow genre={key} desc={data[key].desc} comics={data[key].comics}/>)
  }
  //get 2 random genre and 4 data each
  return <div className="bg-gray-200">
    <div className="mx-40">
      <h2 className="text-center py-5">Genre ></h2>
      <div className="py-5 flex flex-wrap flex-col">
        {
          // data.map(comic => {
          //   return <ComicCardSmall comic={comic} />
          // })
          renderedGenreRows
        }
      </div>
    </div>
  </div>
}