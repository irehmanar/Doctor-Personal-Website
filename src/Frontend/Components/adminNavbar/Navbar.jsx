import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ContrastIcon from '@mui/icons-material/Contrast';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';

import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="Search"/>
          <SearchIcon className='icon'/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon  className='icon'/>English
          </div>
          <div className="item">
            <ContrastIcon  className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitIcon  className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneIcon  className='icon'/>
          </div>
          <div className="item">
            <ChatIcon  className='icon'/>
          </div>
          <div className="item">
            <ListIcon  className='icon'/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='avatar'/>
          </div>
        </div>



        
      </div>
    </div>
  )
}

export default Navbar