import React from 'react'

export default function HourlyForecastEle({icon, time, temp}) {
  return (
    <div className='flex justify-between items-center min-w-[60px] bg-[hsl(243,23%,24%)] rounded-md pr-3 hover:bg-[hsl(243,23%,30%)] box-border border border-[hsl(243,23%,30%)]'>
        <div className='flex items-center'>
            <img className='w-[54px]' src={icon} alt="icon" />
            <p className='text-white font-semibold'>{time}</p>
        </div>
        <p className='text-white text-lg'>{temp}°</p>
    </div>
  )
}
