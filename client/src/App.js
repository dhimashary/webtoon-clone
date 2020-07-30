import React from 'react';
import Navbar from './components/Navbar';
import MainBanner from './components/MainBanner';
import DayComics from './components/DayComics';
import GenreComics from './components/GenreComics';
import RankingList from './components/RankingList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainBanner></MainBanner>
      <DayComics></DayComics>
      <GenreComics></GenreComics>
      <RankingList></RankingList>
      <Footer></Footer>
    </div>
  );
}

export default App;