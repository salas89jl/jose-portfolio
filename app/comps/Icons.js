import React from 'react'
import { icons } from 'app/icons.js'
export default function Icons () {
  return (
        <>
            {icons.map((icon) => (
                <div key={icon.id}>
                    <img src={icon.src} className='h-16 p-2' />
                </div>
            ))}
        </>
  )
}
