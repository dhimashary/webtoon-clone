import React from 'react';
import bgScan from './bg-scan.png';

export default function Footer () {
  return (
    <div className="bg-semi-gray py-10">
      <div className="mx-40 flex justify-center">
        <div className="flex">
          <img src={bgScan} alt="scan me!" className="w-2/5"/>
          <div className="flex flex-col w-2/5 p-4">
            <p>
              Mau baca episode baru duluan?
              Tinggal scan QR code ini!
            </p>
            <div className="flex">
              GOOGLE || APPLE
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}