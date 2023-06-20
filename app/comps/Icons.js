import React from 'react'
import { icons } from 'app/icons.js'
export default function Icons () {
  return (
        <>
            {icons.map((icon) => (
                <div key={icon.id} className='bg-gradient-to-bl  from-gray-800 via-gray-700 to-gray-900 shadow-xl shadow-sky-900 rounded-lg m-1 p-1'>
                    <img src={icon.src} className='h-16 p-2' />
                </div>
            ))}
        </>
  )
}
