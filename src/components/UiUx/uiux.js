import React from 'react'
import './uiux.css'

import luppa from '../../assets/luppa.png'
import background from '../../assets/background.png'
import player from '../../assets/player.png'
import timer from '../../assets/timer.png'
import more from '../../assets/more.png'
import frame from '../../assets/frame.png'
import stick from '../../assets/stickynote.png'
import timers from '../../assets/timers.png'
import persons from '../../assets/persons.png'
import comment from '../../assets/comment.png'



const uiux = () => {
  return (
    <div className='uiux-container px-4'>
      <div className='flex gap-6 mt-4'>
        <div>
          <h2 className='text-2xl'>Welcome, Alexa A.</h2>
          <p className='text-zinc-500'>Have a good day!</p>
        </div>

        <div className='ui-input-box'>
          <img src={luppa} alt="luppa" width={20} height={20} />
          <input className='ui-input' type="text" placeholder='Search' />
        </div>

      </div>

      <div className='mt-5 image-container'>
        <img className='background-image' src={background} alt="background-image" width={664} height={411} />
        <img className='overlay-img' src={player} alt="player-image" width={80} height={80} />

        <div className='ui-design'>
          <div>
            <h3 className='text-3xl text-white'>UI/UX Design</h3>
            <p className='text-2xl text-white mt-2'>11 Lesson</p>
          </div>
          <div className='flex-box'>
            <img src={timer} alt="timer-img" width={30} height={30} />
            <p className='text-2xl text-white'>3 Hours</p>
          </div>
        </div>
      </div>

      <div className='mt-11'>
        <div className='flex justify-between'>
          <h4 className='text-zinc-500 text-2xl'>My Classes</h4>
          <p className='text-blue-600 text-1xl'>See all</p>
        </div>
      </div>

      <div className='mt-8 flex gap-4'>
        <div className='interaction-box'>
          <div className='flex justify-between'>
            <h4>Interaction</h4>
            <img src={more} alt="more" width={24} height={24} />
          </div>
          <p className='mt-3 text-zinc-500'>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Varius</p>

          <div className='flex gap-3 mt-8'>
            <img src={frame} alt="frame-img" width={18} height={18} />
            <p className='text-zinc-400'>Wadew Warren</p>
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-3 mt-4'>
              <img src={stick} alt="stick-img" width={18} height={18} />
              <p className='text-zinc-400'>B classes</p>
            </div>
            <div className='flex gap-3 mt-4'>
              <img src={timers} alt="timer-img" width={18} height={18} />
              <p className='text-zinc-400'>3 Hours</p>
            </div>
          </div>
          <div className='mt-5 flex justify-between'>
            <img src={persons} alt="persons-img" width={102} height={36} />
            <div className='flex gap-3'>
              <p className='text-zinc-400'>20</p>
              <img src={comment} alt="cooment-img" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className='interaction-box'>
          <div className='flex justify-between'>
            <h4>Interaction</h4>
            <img src={more} alt="more" width={24} height={24} />
          </div>
          <p className='mt-3 text-zinc-500'>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Varius</p>

          <div className='flex gap-3 mt-8'>
            <img src={frame} alt="frame-img" width={18} height={18} />
            <p className='text-zinc-400'>Wadew Warren</p>
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-3 mt-4'>
              <img src={stick} alt="stick-img" width={18} height={18} />
              <p className='text-zinc-400'>B classes</p>
            </div>
            <div className='flex gap-3 mt-4'>
              <img src={timers} alt="timer-img" width={18} height={18} />
              <p className='text-zinc-400'>3 Hours</p>
            </div>
          </div>
          <div className='mt-5 flex justify-between'>
            <img src={persons} alt="persons-img" width={102} height={36} />
            <div className='flex gap-3'>
              <p className='text-zinc-400'>20</p>
              <img src={comment} alt="cooment-img" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default uiux