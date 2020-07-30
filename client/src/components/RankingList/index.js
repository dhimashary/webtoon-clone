import React from 'react';
import RankingComicList from './components/RankingComicList';

export default function RankingList() {
  return <div className="mx-40 mt-5 mb-10 flex">
    <RankingComicList title="Genre"/>
    <RankingComicList title="Popularitas"/>
  </div>
}