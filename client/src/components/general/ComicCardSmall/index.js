import React from 'react';

export default function ComicCardSmall (props) {
  const divStyle = {
    backgroundImage: 'url(' + props.comic.img + ')',
    height: '200px',
  };
  
  return (
    <div className="w-1/5 box-border p-2 flex flex-col mb-4">
      <div className="bg-white p-4 flex flex-col" style={divStyle}>
        <h3>{props.comic.title}</h3>
        <p className="text-green-500">
          {props.comic.views}
        </p>
        <span className="block mt-auto">
          Genre
        </span>
      </div>
    </div>
  )
}