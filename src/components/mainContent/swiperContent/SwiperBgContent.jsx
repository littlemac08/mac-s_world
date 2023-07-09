import React from 'react';
import classes from './SwiperBgContent.module.scss'

const SwiperBgContent = ({javaA, javaB, javaC}) => {
  return (
    <div className={classes.swiper_bg_content_wrap}>
      <div className={classes.swiper_bg}>
        <img src={javaA} alt={javaA} />
      </div>
      <div className={classes.swiper_bg_2}>
        <div className={classes.swiper_bg_2_1}>
          <img src={javaB} alt={javaB} />
        </div>
        <div className={classes.swiper_bg_2_2}>
          <img src={javaC} alt={javaC} />
        </div>
      </div>
    </div>
  )
}

export default SwiperBgContent