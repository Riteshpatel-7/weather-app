import React from 'react'
import logo from '../assets/images/logo.svg'
import settingsIcon from '../assets/images/icon-units.svg'
import dropdownIcon from '../assets/images/icon-dropdown.svg'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-8'>
            <img src={logo} alt="logo"/>
        <button className='bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,23%,24%)] transition-colors duration-300 ease-in-out rounded-lg px-4 py-2 f-4'>
            <div>
                <img src={settingsIcon} alt="settings icon" className='inline-block mr-3'/>
                <span className='text-white text-lg font-medium align-middle mr-3'>Units</span>
                <img src={dropdownIcon} alt="dropdown icon" className='inline-block'/>
            </div>
        </button>
    </header>
  )
}
