import React from "react";
import DayNavigation from "./components/DayNavigation";
import DayComicList from "./components/DayComicList";

export default function DayComics () {
  return <div className="border-b border-gray-400">
    <DayNavigation></DayNavigation>
    <DayComicList></DayComicList>
  </div>;
};