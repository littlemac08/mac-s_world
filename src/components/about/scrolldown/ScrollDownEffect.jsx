import React from 'react';
import { BiGhost, BiSolidGhost } from "react-icons/bi";
import classes from './ScrollDownEffect.module.scss'

const ScrollDownEffect = () => {
  return (
    <div className={classes.scroll_down_effect_wrap}>
        <div className={classes.scroll_action_1}>
            <BiSolidGhost />
        </div>
        <div className={classes.scroll_action_2}>
            <BiGhost />
        </div>
    </div>
  )
}

export default ScrollDownEffect