import React from 'react'

export default function DailyForecastCard({day, min, max, icon}) {
  return (
    <div className='bg-[hsl(243,27%,20%)] rounded-xl shadow-lg p-4 text-white flex flex-col items-center gap-2 border [border-color:hsl(243,23%,30%)] lg:p-2 xl:p-4 lg:w-[100%]'>
        <p>{day}</p>
        <img src={icon} alt="weather icon" className='w-12 h-12' />
        <div id='range' className='flex gap-2 text-sm justify-between'> 
            <span>{min}°</span> 
            <span>{max}°</span>
        </div>
    </div>
  )
}
