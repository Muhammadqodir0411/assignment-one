import React from 'react'
import './admin.css'

import bell from '../../assets/bell.png'
import admins from '../../assets/admin.png'
import btn from '../../assets/btn.png'
import right from '../../assets/right.png'



const admin = () => {
    return (
        <div className='admin-container'>
            <div className='flex-box'>
                <img src={bell} alt="bell-img" width={52} height={52} />
                <img src={admins} alt="admin" width={52} height={52} />
            </div>
            <div className='flex justify-between mt-5'>
                <h3 className='text-3xl'><strong>July, 2021</strong></h3>
                <img src={btn} alt="btn-img" width={77} height={36} />
            </div>

            <div className='kalendar'>
                <div className='week-box'>
                    <p className="week"><strong>Mo</strong></p>
                    <p className="week"><strong>To</strong></p>
                    <p className="week"><strong>We</strong></p>
                    <p className="week"><strong>Th</strong></p>
                    <p className="week"><strong>Fr</strong></p>
                    <p className="week"><strong>Sa</strong></p>
                    <p className="week"><strong>Su</strong></p>
                </div>
                <div className='week-number'>
                    <div className='week-number-box'>
                        <p className="number text-zinc-300">1</p>
                        <p className="number text-zinc-300">2</p>
                        <p className="number text-zinc-300">3</p>
                        <p className="number text-zinc-300">4</p>
                        <p className="number text-zinc-300">5</p>
                        <p className="number text-zinc-300">6</p>
                        <p className="number text-zinc-300">7</p>
                    </div>
                    <div className='week-number-box'>
                        <p className="number text-zinc-300">8</p>
                        <p className="number text-zinc-300">9</p>
                        <p className="number text-zinc-300">10</p>
                        <p id='number-elevn' className="number">11</p>
                        <p className="number">12</p>
                        <p className="number">13</p>
                        <p className="number">14</p>
                    </div>
                    <div className='week-number-box'>
                        <p className="number">15</p>
                        <p className="number">16</p>
                        <p className="number">17</p>
                        <p className="number">18</p>
                        <p className="number">19</p>
                        <p className="number">20</p>
                        <p className="number">21</p>
                    </div>
                    <div className='week-number-box'>
                        <p className="number">22</p>
                        <p className="number">23</p>
                        <p className="number">24</p>
                        <p className="number">25</p>
                        <p className="number">26</p>
                        <p className="number">27</p>
                        <p className="number">28</p>
                    </div>
                    <div className='number-box'>
                        <p className="number">29</p>
                        <p className="number">30</p>
                        <p className="number">31</p>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <h3 className='text-2xl'><strong>Schedule</strong></h3>
                <div className='sciences-box'>
                    <div className='flex items-center gap-4'>
                        <p className='span'></p>
                        <div>
                            <h4><strong>English classes</strong></h4>
                            <p className='text-zinc-400'>Tika sarak s.pd</p>
                        </div>
                    </div>
                    <img src={right} alt="right-img" width={14} height={14} />
                </div>

                <div className='sciences-box'>
                    <div className='flex items-center gap-4'>
                        <p className='span'></p>
                        <div>
                            <h4><strong>Mathematic classes</strong></h4>
                            <p className='text-zinc-400'>Tika sarak s.pd</p>
                        </div>
                    </div>
                    <img src={right} alt="right-img" width={14} height={14} />
                </div>

                <div className='sciences-box'>
                    <div className='flex items-center gap-4'>
                        <p className='span'></p>
                        <div>
                            <h4><strong>Physical classes</strong></h4>
                            <p className='text-zinc-400'>Tika sarak s.pd</p>
                        </div>
                    </div>
                    <img src={right} alt="right-img" width={14} height={14} />
                </div>

                <div className='sciences-box'>
                    <div className='flex items-center gap-4'>
                        <p className='span'></p>
                        <div>
                            <h4><strong>English classes</strong></h4>
                            <p className='text-zinc-400'>Tika sarak s.pd</p>
                        </div>
                    </div>
                    <img src={right} alt="right-img" width={14} height={14} />
                </div>

                <div className='sciences-box'>
                    <div className='flex items-center gap-4'>
                        <p className='span'></p>
                        <div>
                            <h4><strong>Mathematic classes</strong></h4>
                            <p className='text-zinc-400'>Tika sarak s.pd</p>
                        </div>
                    </div>
                    <img src={right} alt="right-img" width={14} height={14} />
                </div>

                <div className='sciences-box'>
                    <div className='flex items-center gap-4'>
                        <p className='span'></p>
                        <div>
                            <h4><strong>Physical classes</strong></h4>
                            <p className='text-zinc-400'>Tika sarak s.pd</p>
                        </div>
                    </div>
                    <img src={right} alt="right-img" width={14} height={14} />
                </div>
            </div>
        </div>
    )
}

export default admin