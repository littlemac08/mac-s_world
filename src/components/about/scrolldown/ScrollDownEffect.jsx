import React from 'react';
import { BiGhost, BiSolidGhost } from "react-icons/bi";
import './ScrollDownEffect.scss'

const ScrollDownEffect = () => {
  return (
    <div className='scroll_down_effect_wrap'>
        <div className='scroll_action_1'>
            <BiSolidGhost />
        </div>
        <div className='scroll_action_2'>
            <BiGhost />
        </div>
    </div>
  )
}

export default ScrollDownEffect