import React from 'react'
import ContactIcon from './contactIcon/ContactIcon'
import classes from './ContactItems.module.scss'

const Contact = () => {
  return (
    <div className={classes.contect_wrap}>
        <ContactIcon />
    </div>
  )
}

export default Contact