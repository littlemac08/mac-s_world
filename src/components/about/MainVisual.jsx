import React from 'react'
import TypewriterApi from './typewriter/TypewriterApi'
import classes from './MainVisual.module.scss'
import ScrollDownEffect from './scrolldown/ScrollDownEffect'


const MainVisual = () => {
  return (
    <div>
        <div className={classes.main_text_wrap}>
            <TypewriterApi />
            <ScrollDownEffect />
        </div>
    </div>
  )
}

export default MainVisual