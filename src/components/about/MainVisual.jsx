import React from 'react'
import TypewriterApi from './typewriter/TypewriterApi'
import ScrollDownEffect from './scrolldown/ScrollDownEffect'
import './MainVisual.scss'

const MainVisual = () => {
  return (
    <div>
        <div className='main_text_wrap'>
            <TypewriterApi />
            <ScrollDownEffect />
        </div>
    </div>
  )
}

export default MainVisual