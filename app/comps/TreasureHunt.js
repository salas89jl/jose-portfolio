'use client'
import React, { useState } from 'react'

const TreasureHunt = () => {
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * 9))// eslint-disable-line no-unused-vars
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * 9))// eslint-disable-line no-unused-vars

  const treasureHunt = (location) => {
    if (treasureLocation === location) {
      // Win condition
      document.getElementById('results').innerHTML = 'You WIN! 🌈'
      document.getElementById('island').innerHTML = ''
    } else if (bombLocation === location) {
      // Lose condition
      document.getElementById('results').innerHTML = 'Sorry, you lose 💣'
      document.getElementById('island').innerHTML = ''
    } else if (treasureLocation !== location && bombLocation !== location) {
      // Display empty space
      document.getElementById(location).innerHTML = '🦴'
      document.getElementById('results').innerHTML = 'Its just a bone, keep looking'
    }
  }

  return (
    <>
    <div className='text-center bg-gradient-to-t from-slate-800 via-slate-700 to-slate-700 m-1 xs:m-1 rounded-xl border-4 border-cyan-500 text-white font-mono shadow-xl shadow-sky-900'>
      <h1 className='text-3xl font-semibold bg-gradient-to-t from-yellow-300 via-yellow-300 to-yellow-300 mx-2 my-10 rounded-lg p-3 text-yellow-50 font-mono outline outline-2 outline-yellow-300 shadow-xl shadow-yellow-950'>Treasure Hunt Game</h1>
      <h2 className='py-2 text-lg font-semibold'>Instructions</h2>
      <div className="p-1 ">
        <ul>
          <li>Click the boxes to reveal whats on the map</li>
          <li>If you click on the bomb, you lose</li>
          <li>If you click on the treasure, you win</li>
        </ul>
      </div>
      <div id="island" className='min-h-min flex justify-center p-10 '>
        <table className='text-6xl border-4 border-cyan-950 p-5 bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-300 shadow-xl shadow-zinc-900 rounded-xl'>
          <tbody >
            <tr className='border-none'>
              <td id="0" className='p-3 cursor-pointer' onClick={() => treasureHunt(0)}>🏝️</td>
              <td id="1" className='p-3 cursor-pointer' onClick={() => treasureHunt(1)}>🏝️</td>
              <td id="2" className='p-3 cursor-pointer' onClick={() => treasureHunt(2)}>🏝️</td>
            </tr>
            <tr className='border-none'>
              <td id="3" className='p-3 cursor-pointer' onClick={() => treasureHunt(3)}>🏝️</td>
              <td id="4" className='p-3 cursor-pointer' onClick={() => treasureHunt(4)}>🏝️</td>
              <td id="5" className='p-3 cursor-pointer' onClick={() => treasureHunt(5)}>🏝️</td>
            </tr>
            <tr className='border-none'>
              <td id="6" className='p-3 cursor-pointer' onClick={() => treasureHunt(6)}>🏝️</td>
              <td id="7" className='p-3 cursor-pointer' onClick={() => treasureHunt(7)}>🏝️</td>
              <td id="8" className='p-3 cursor-pointer' onClick={() => treasureHunt(8)}>🏝️</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />  
      <div className='flex-1 m-1 '>
        <div className='m-1'>
          <p id="results" className='bg-stone-200 mx-4 my-10 px-3  rounded-lg text-xl text-slate-800 '></p>
        </div>
      </div>
      <button type="button"
        onClick={() => window.location.reload()}
        className='
          bg-slate-500
          text-white
            p-3
            rounded-lg
            m-3
            shadow-lg
            shadow-black
            outline outline-2
            outline-gray-700
          '
      >
        Restart Game
      </button>
      <br />
      <br />
      </div>

    </>
  )
}

export default TreasureHunt
