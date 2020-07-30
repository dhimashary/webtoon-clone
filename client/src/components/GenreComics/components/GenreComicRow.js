import React from 'react';
import ComicCardSmall from '../../general/ComicCardSmall';

export default function GenreComicRow (props) {
  return <div className="flex block">
      <div className="w-1/5 box-border p-2 mb-4 text-white">
        <div className={ `p-4 flex flex-col ` + (props.genre === 'HORROR' ? 'bg-red-600' : 'bg-blue-600')} style={{height: "200px"}}>
          <h3 className="text-2xl">{props.genre}</h3>
          <div className="mt-auto text-lg">
            <p>
              {props.desc}
            </p>
          </div>
        </div>
      </div>
      {
        props.comics.map(comic => <ComicCardSmall comic={comic}/>)
      }
  </div>
}