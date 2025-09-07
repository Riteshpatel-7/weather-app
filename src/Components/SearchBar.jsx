import React from 'react'
import searchIcon from '../assets/images/icon-search.svg'

export default function SearchBar({placeholder, btnText}) {
  return (
    <div className='flex justify-center items-center my-8 gap-4'>
        <div className='flex items-center bg-[hsl(243,27%,20%)] rounded-lg w-[30%]'>
            <label className='ml-4' htmlFor="search"><img src={searchIcon} alt="search-icon" /></label>
            <input id='search' type="text" placeholder={placeholder} className='font-[DM_Sans] bg-[hsla(238,16%,31%,0)] placeholder:text-white placeholder:opacity-70 text-white text-lg rounded-lg px-6 py-3 w-[100%] focus:outline-none'/>
        </div>
        <button className='font-[DM_Sans] bg-[hsl(233,67%,56%)] hover:bg-[hsl(233,68%,54%)] transition-colors duration-300 ease-in-out rounded-xl px-6 py-3 text-white text-lg font-medium'>{btnText}</button>
    </div>
  )
}
