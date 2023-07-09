import React, { useState } from 'react'
import classes from './SwiperContent.module.scss'
import TextSVG from '../svgChanger/SvgChanger'
import SwiperBgContent from './SwiperBgContent'

const SwiperContent = ({textA, textB, javaA, javaB, javaC}) => {
  const [ mouseOver, setMouseOver ] = useState(false)
  const mouseOverHandler = () => {
    setMouseOver(true)
  }
  const mouseOutHandler = () => {
    setMouseOver(false)
  }

  const swiperContentCover = mouseOver ? classes['swiper_content_cover_remove'] : classes['swiper_content_cover'];

  return (
    <div className={classes.swiper_content_wrap} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} >
        <div className={`${swiperContentCover}`}>
            <TextSVG textA={textA} textB={textB} mouseOverState={mouseOver} />
        </div>
        <div className={classes.swiper_content_bg}>
          <SwiperBgContent javaA={javaA} javaB={javaB} javaC={javaC}/>
        </div>
    </div>
  )
}

export default SwiperContent