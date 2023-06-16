'use client'
import React, { useEffect, useState } from 'react'

export default function GoBackButton () {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setShowButton(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      { showButton && (
      <button
        className="fixed bottom-4 right-4 p-2 bg-gray-900 text-white rounded-md"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </button>
      ) }
    </>
  )
}
