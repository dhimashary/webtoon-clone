import React from "react";
import logo from "../../assets/logo.png"

export default function Navbar (props) {
  return <nav className="flex">
    <div className="w-1/12 text-gray-700 text-center px-3">
      <img src={ logo } alt="logo"/>
    </div>
    <div className="w-4/12 text-center flex text-black text-lg font-semibold">
      <div className="w-4/12 text-center m-auto">
        Jadwal Harian
      </div>
      <div className="w-3/12 text-center m-auto">
        Genre
      </div>
      <div className="w-3/12 text-center m-auto">
        Popular
      </div>
      <div className="w-2/12 text-center m-auto">
        Kanvas
      </div>
    </div>
    <div className="flex w-7/12 text-center">
      <button className="w-2/12 text-center bg-black ml-auto text-white text-sm rounded-full my-auto py-2">Terbitkan</button>
      <button className="w-2/12 text-center border-gray-300 border mx-2 text-sm rounded-full my-auto text-gray-700 py-2">Masuk</button>
    </div>
  </nav>
}