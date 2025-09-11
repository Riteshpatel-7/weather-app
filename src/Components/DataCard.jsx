import React from 'react'

export default function DataCard({title, data}) {
  return (
    <div className='bg-[hsl(243,27%,20%)] rounded-xl shadow-lg p-4 lg:w-[100%] text-white flex items-center border [border-color:hsl(243,23%,30%)]'>
        <div className='flex flex-col gap-5'>
            <p className='opacity-75'>{title}</p>
            <h2 className='text-3xl font-light'>{data}</h2>
        </div>
    </div>
  )
}
