import React from 'react'
import { PiArrowElbowRightDownLight } from "react-icons/pi";
import './MainFooter.scss'
import { Link } from 'react-router-dom';

const MainFooter = ({contactShowHandler}) => {
  return (
    <div className='footer_wrap'>
      <div className='footer_menu'>
        <p className='footer_main_menu'>
          <span>DEVICE</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>MAC / WINDOW</p>
          <p>MACBOOK</p>
          <p>WINDOW DESKTOP</p>
        </div>
      </div>
      <div className='footer_menu'>
        <p className='footer_main_menu'>
          <span>CONTECT</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p className='active_buttons' onClick={contactShowHandler}>wkdaudfo4@gmail.com</p>
        </div>
      </div>
      <div className='footer_menu'>
        <p className='footer_main_menu'>
          <span>LOCATION</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>KOREA, SEOUL</p>
          <p>GANGNAM / JUNGRANG</p>  
        </div>
      </div>
      <div className='footer_menu'>
        <p className='footer_main_menu'>
          <span>SOCIAL</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>INSTAGRAM</p>
          <p className='active_buttons'><Link to='https://mac-world.tistory.com/'>TISTORY</Link></p>  
        </div>
      </div>
    </div>
  )
}

export default MainFooter