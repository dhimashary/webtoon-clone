import React from 'react';
import RankingComicItem from './RankingComicItem';

export default function RankingComicList (props) {
  return <div className="flex flex-col w-1/2 border-box">
    <h3 className="mb-4 block">
      Berdasarkan {props.title} >
    </h3>
    <RankingComicItem />
    <RankingComicItem />
    <RankingComicItem />
    <RankingComicItem />
    <RankingComicItem />
  </div>
}