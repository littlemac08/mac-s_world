import React from 'react'
import { PiArrowElbowRightDownLight } from "react-icons/pi";
import classes from './MainFooter.module.scss'

const MainFooter = () => {
  return (
    <div className={classes.footer_wrap}>
      <div className={classes.footer_menu}>
        <p className={classes.footer_main_menu}>
          <span>DEVICE</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>MAC / WINDOW</p>
          <p>MACBOOK</p>
          <p>WINDOW DESKTOP</p>
        </div>
      </div>
      <div className={classes.footer_menu}>
        <p className={classes.footer_main_menu}>
          <span>CONTECT</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>myeongrae08@daum.net</p>
          <p>wkdaudfo4@gmail.com</p>
        </div>
      </div>
      <div className={classes.footer_menu}>
        <p className={classes.footer_main_menu}>
          <span>LOCATION</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>KOREA, SEOUL</p>
          <p>GANGNAM / JUNGRANG</p>  
        </div>
      </div>
      <div className={classes.footer_menu}>
        <p className={classes.footer_main_menu}>
          <span>SOCIAL</span>
          <PiArrowElbowRightDownLight />
        </p>
        <div>
          <p>INSTAGRAM</p>
          <p>TISTORY</p>  
        </div>
      </div>
    </div>
  )
}

export default MainFooter