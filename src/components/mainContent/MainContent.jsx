import React from 'react'
import classes from './MainContent.module.scss'
import MainContentSwiper from './swiper/MainContentSwiper'


const MainContent = () => {
  return (
    <div className={classes.main_content_wrap}>
        <MainContentSwiper />
    </div>
  )
}

export default MainContent