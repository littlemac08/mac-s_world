import React from 'react';
import classes from './SubVisual.module.scss'
import { TextLine } from './textLine/TextLine';
import SubContent from './subContent/SubContent';

const SubVisual = () => {
  return (
    <div className={classes.sub_visual_wrap}>
        <TextLine />
        <SubContent />
    </div>
  )
}

export default SubVisual