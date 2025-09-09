import React from 'react'

export default function DataCard({title, data}) {
  return (
    <div className='bg-[hsl(243,27%,20%)] rounded-xl shadow-lg p-4 lg:w-[100%] text-white flex items-center'>
        <div className='flex flex-col gap-4'>
            <p className='opacity-75'>{title}</p>
            <h2 className='text-3xl font-extralight'>{data}</h2>
        </div>
    </div>
  )
}
