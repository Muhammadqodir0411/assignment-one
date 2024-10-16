import React from 'react'

import './logo.css'
import logoIpsum from '../../assets/logoipsum.svg'
import dashboard from '../../assets/dashboard.png'
import calendar from '../../assets/calendar.jpg'
import homewrok from '../../assets/homewrok.png'
import message from '../../assets/messager.png'
import group from '../../assets/group.png'
import settings from '../../assets/settings.png'
import logout from '../../assets/logout.png'

const logo = () => {
  return (
    <div className='logo-wrap mt-3'>
      <img src={logoIpsum} alt="LogoIpsum" width={177} height={38} />
      <div>
        <div className='dashboard-box'>
          <img src={dashboard} alt="dashboard" width={20} height={20} />
          <p className='text-white text-2xl'>Dashboard</p>
        </div>

        <div className='flex items-center mt-4 px-3 gap-4'>
          <img src={calendar} alt="calendar" width={20} height={20} />
          <p className='text-zinc-300'><strong>Schedule</strong></p>
        </div>
        <div className='flex items-center mt-5 px-3 gap-4'>
          <img src={homewrok} alt="homewrok" width={20} height={20} />
          <p className='text-zinc-300'><strong>Homewrok</strong></p>
        </div>
        <div className='flex items-center mt-5 px-3 gap-4'>
          <img src={message} alt="calendar" width={20} height={20} />
          <p className='text-zinc-300'><strong>Message</strong></p>
        </div>
        <div className='flex items-center mt-5 px-3 gap-4'>
          <img src={group} alt="group" width={20} height={20} />
          <p className='text-zinc-300'><strong>Group</strong></p>
        </div>
        <div className='flex items-center mt-5 px-3 gap-4'>
          <img src={settings} alt="settings" width={20} height={20} />
          <p className='text-zinc-300'><strong>Settings</strong></p>
        </div>


        <div className='flex items-center px-3 gap-4 logout-box'>
          <img src={logout} alt="logout" width={24} height={24} />
          <p className='text-zinc-300'><strong>Logout</strong></p>
        </div>

      </div>
    </div>
  )
}

export default logo