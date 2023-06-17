'use client'
import React, { useEffect, useState } from 'react'

export default function AniText () {
  const words = [

    'Software Developer',
    ' Tech Enthusiast',
    ' Nature Enthusiast',
    '  U.S.N Veteran'

  ]
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [forwards, setForwards] = useState(true)
  const [skipCount, setSkipCount] = useState(0)
  const skipDelay = 15
  const speed = 70

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[currentIndex].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1)
          if (skipCount === skipDelay) {
            setForwards(false)
            setSkipCount(0)
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
          setOffset(0)
        }
      }
      const part = words[currentIndex].substr(0, offset)
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1)
        } else {
          setOffset((prevOffset) => prevOffset - 1)
        }
      }
      setText(part)
    }, speed)

    return () => clearInterval(interval)
  }, [currentIndex, offset, forwards, skipCount])

  return <div className="word"><p> I am a...</p> {text}</div>
};
