import React from 'react'

export default function DayNavigation (props) {
  const days = ["SEN", "SEL", "RAB", "KAM", "JUM", "SAB", "MIN"]
  const currentDayInWeek = new Date().getDay() - 1

  return <div className="mx-48">
    <ul className="flex flex-row">
      {
        days.map((day, i) => {
        return <li key={i} className={"py-5 px-12 cursor-pointer " + (currentDayInWeek === i ? "bg-green-400 text-white" : "bg-white hover:text-green-400")}>{day}</li>
        })
      }
      <li className="text-gray-500 py-5 px-12 cursor-pointer hover:text-green-400">lainnya</li>
    </ul>
  </div>
}