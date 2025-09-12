import React from 'react'
import logo from '../assets/images/logo.svg'
import settingsIcon from '../assets/images/icon-units.svg'
import dropdownIcon from '../assets/images/icon-dropdown.svg'
import UnitOptions from './UnitOptions'

export default function Header({unitOptions, setUnitOptions, setUnits, units}) {
  return (
    <header className='flex justify-between items-center py-8'>
            <img src={logo} alt="logo" className='w-[160px] sm:w-auto'/>
        <button className='bg-[hsl(243,27%,20%)] hover:bg-[hsl(243,23%,24%)] transition-colors duration-200 ease-in-out rounded-lg px-4 py-2 f-4 relative' onClick={(e) => {e.stopPropagation(); setUnitOptions(!unitOptions)}}>
            <div>
                <img src={settingsIcon} alt="settings icon" className='inline-block mr-3'/>
                <span className='text-white text-[0.9rem] lg:text-lg font-medium align-middle mr-3'>Units</span>
                <img src={dropdownIcon} alt="dropdown icon" className='inline-block'/>
            </div>
            <UnitOptions  UnitOptions={unitOptions} setUnitOptions={setUnitOptions} setUnits={setUnits} units={units}/>
        </button>
    </header>
  )
}
