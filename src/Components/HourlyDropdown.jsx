import React from 'react'

export default function HourlyDropdown({hourlyDropdown, setHourlyDropdown, today, setWeekDay, setHourlyDate, currentWeather}) {
    if(!hourlyDropdown) return;
  return (
    <div className='absolute top-[120%] right-0 w-[200px] p-2 bg-[hsl(243,27%,20%)] shadow-lg rounded-lg z-10 border border-[hsl(243,23%,30%)]'>
        {
            Array.from({ length: 7 }).map((_, i) => {
                const next = new Date(today);
                next.setDate(today.getDate() + i);
            return <div className='  hover:bg-[hsl(243,23%,24%)] rounded-md p-2.5 text-left' key={i} id={i} onClick={(e) => {setHourlyDropdown(!hourlyDropdown); setWeekDay(e.target.innerText); setHourlyDate(currentWeather.daily.time[e.target.id])}} >{next.toLocaleDateString("en-US", {weekday: 'long'})}</div>
    })
        }
    </div>
  )
}
